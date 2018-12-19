import React, { Component } from 'react';
import axios from 'axios';
import MapContainer from './MapContainer';
export default class MapRepository extends Component {
    constructor() {
        super();
        this.state = {
            new_data: null
        }

    };
    componentDidMount() {
         //console.log("in map");
        axios.get("http://localhost:9001/person_info.json")
            .then(({data}) => {
                this.setState({ new_data: data.info });
            })

        // axios.get("http://10.245.101.254:4000/address")
        //     .then(({data}) => {
        //         //console.log("************"+data)
        //         this.setState({ new_data: data });
        //         //console.log(data)
        //     })
    }
    render() {
        return (
            <div className="container-fluid">
                {(this.state && this.state.new_data) ?
                    <MapContainer key={this.props.inputAddress} array={this.state.new_data} currentLoc={false} inputAddressFlag={this.props.inputAddressFlag} inputAddress={this.props.inputAddress} />
                    : <div>Not Found</div>
                }
            </div>
        )
    }
}