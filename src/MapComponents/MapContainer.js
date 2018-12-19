import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { geolocation } from 'geolocation';
import Geocode from "react-geocode";
import '../../src/Styles/advisorinfostyle.css';
import AdvisorInfo from './AdvisorInfo';
export class MapContainer extends Component {
    constructor(props) {
        //console.log("Hello in map did mount");
        super(props);
        const {lat, lng} = Map.defaultProps.initialCenter;
        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng
            },
            advisorFlag: false,
            location_data: [],
            default_loc: [],
            fed_data: [],
            default_loc_flag: false,
            coords_current: {},
            flag_temp: true,
            distance_flag: 6371e10,
            error_flag: false,
            inputAddress: null,
            nearestLocation: {
                lat: 0,
                lng: 0
            }
        }
    }
    componentDidMount() {
        this.getCurrentLocation();

    }
    componentWillUnmount() {
        this.setState({
            currentLocation: {
                lat: 0,
                lng: 0
            },
            advisorFlag: false,
            location_data: [],
            default_loc: [],
            fed_data: [],
            default_loc_flag: false,
            coords_current: {},
            flag_temp: true,
            distance_flag: 6371e10,
            error_flag: false,
            inputAddress: null,
            nearestLocation: {
                lat: 0,
                lng: 0
            }
        });
    }
    getCurrentLocation() {
        if (this.props.inputAddressFlag === true) {
            Geocode.fromAddress(this.props.inputAddress).then(
                response => {
                    //console.log("done title")
                    const { lat, lng } = response.results[0].geometry.location;
                    this.state.coords_current['latitude'] = lat;
                    this.setState({ coords_current: this.state.coords_current });
                    this.state.coords_current['longitude'] = lng;
                    this.setState({ coords_current: this.state.coords_current });
                    const current_pos = Object.assign({}, {
                        title: 'Input Address',
                        name: 'Current Location',
                        position: {
                            lat: lat,
                            lng: lng
                        }
                    })
                    //console.log(current_pos.position)
                    this.setState(prevState => ({ location_data: prevState.location_data.concat(current_pos) }));
                    //console.log(this.props.array)
                    this.getLatLong();
                    //Get address from latidude & longitude.
                    this.getCurrentAddress();

                },
                error => {
                    //console.log("Wrong Input")
                    this.setState(prevState => ({ error_flag: true }))
                    //console.error(error);
                }
            );
        }
        else if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                //this.state.coords_current = pos.coords;
                //console.log(pos.coords)
                this.setState(prevState => ({ coords_current: pos.coords }));
                const current_pos = Object.assign({}, {
                    title: 'Current Location',
                    name: 'Current Location',
                    position: {
                        lat: this.state.coords_current.latitude,
                        lng: this.state.coords_current.longitude
                    }
                })
                //console.log(current_pos.position)
                this.setState(prevState => ({ location_data: prevState.location_data.concat(current_pos) }));
                //console.log(this.props.array)
                this.getLatLong();
                //Get address from latidude & longitude.
                this.getCurrentAddress();
            })
        }
    }
    getLatLong() {
        this.props.array.map(i => {
            Geocode.fromAddress(i.address).then(
                response => {
                    const { lat, lng } = response.results[0].geometry.location;
                    const current_pos = Object.assign({}, {
                        title: i.name,
                        name: i.name,
                        position: {
                            lat: lat,
                            lng: lng
                        }
                    })
                    this.setState(prevState => ({ location_data: prevState.location_data.concat(current_pos) }));
                    this.calculateDistance();
                    //this.storeInfo(this.state.location_data);
                },
                error => {
                    console.error(error);
                }
            );
        })
    }
    getCurrentAddress() {
        this.props.array.map(i => {
            this.setState(prevState => ({ fed_data: prevState.fed_data.concat(i) }))
        })
        Geocode.fromLatLng(this.state.coords_current.latitude, this.state.coords_current.longitude).then(
            response => {
                const address = response.results[0].formatted_address;
                const current_pos = Object.assign({}, {
                    title: 'Current Location',
                    name: 'Current Location',
                    address: address
                })
                this.setState(prevState => ({ fed_data: prevState.fed_data.concat(current_pos) }))
            },
            error => {
                console.error(error);
            }
        );
    }
    calculateDistance() {
        //console.log("We are inside distance")
        const lat1 = Math.abs(this.state.coords_current.latitude);
        const lon1 = Math.abs(this.state.coords_current.longitude);
        this.state.location_data.map(i => {
            const lat2 = Math.abs(i.position.lat);
            const lon2 = Math.abs(i.position.lng);
            //console.log(lat2)
            const R = 6371e3; // earth radius in meters
            const a1 = lat1 * (Math.PI / 180);
            const a2 = lat2 * (Math.PI / 180);
            const a3 = Math.abs((lat2 - lat1) * (Math.PI / 180));
            const a4 = Math.abs((lon2 - lon1) * (Math.PI / 180));
            const a = (Math.sin(a3 / 2) * Math.sin(a3 / 2)) +
                ((Math.cos(a1) * Math.cos(a2)) * (Math.sin(a4 / 2) * Math.sin(a4 / 2)));
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            const distance = R * c;
            //console.log(distance)
            if (this.state.distance_flag > distance && distance !== 0) {
                this.props.array.map(j => {
                    if (j.name === i.name) {
                        this.setState(prevState => ({ distance_flag: distance, default_loc: j, default_loc_flag: true }));
                    }
                })

            }
        })
    }
    onMarkerClick(i) {
        this.state.fed_data.map(j => {
            if (j.name === i.name) {
                this.setState({ inputData: j, advisorFlag: true });
            }

        })

        if (this.state.advisorFlag === false)
            this.setState({ advisorFlag: true });
    }
    render() {
        const style = {
            //width: '100vh',
            height: '100vh',
            //position: 'absolute',
        }
        if (!this.props.loaded) {
            return (<div>Loading</div>)
        }
        else {
            return (
                <div >
                    <div className="col-sm-8 col-xs-7 col-md-9 col-lg-9" style={style}>
                        <Map google={this.props.google} zoom={14} centerAroundCurrentLocation={true}  >
                            {this.state.location_data.map(i => {
                                return (<Marker onClick={this.onMarkerClick.bind(this, i)} key={Math.random()} title={i.title} name={i.name} position={{ lat: i.position.lat, lng: i.position.lng }} />)
                            })
                            }
                        </Map>
                    </div>
                    <div className="col-sm-4 col-xs-5 col-md-3 col-lg-3" >
                        <AdvisorInfo flag={this.state.advisorFlag} data={this.state.inputData} default_marker={this.state.default_loc} default_flag={this.state.default_loc_flag} error_flag={this.state.error_flag} />
                    </div>
                </div>
            )
        }
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer)