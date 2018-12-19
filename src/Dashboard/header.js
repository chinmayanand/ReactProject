import React, { Component } from 'react';
import axios from 'axios';
import '../../src/Styles/CSSFile.css';
import Main from './MainContent';
import Footer from './Footer';
import Geocode from "react-geocode";
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { new_data: null, flag: false, shown: false, input_address: null, url: null, user_address: null }

    };
    componentDidMount() {
        //console.log("In remote call");
        axios.get("http://localhost:9000/person_data.json")
            .then(({data}) => {
                this.setState({ new_data: data.Person_Info });
            })
        // axios.get("http://10.245.101.254:3000/users")
        //     .then(({data}) => {
        //         //console.log("1In remote call");
        //         this.setState({ new_data: data })
        //         //console.log("2In remote call");
        //     })
    }

    onUserClick() {
        this.setState({ input_address: this.refs.inputAddress.value })
    }
    onAddressClick(e) {
        //this.setState({ input_address: this.refs.inputAddress.value })
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <header id="header">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                                <a className="navlink navbar-brand" href="#">Home</a>
                            </div>
                            <div className="collapse navbar-collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    <li id="form_elements">
                                        <form className="navbar-form" onSubmit={this.onAddressClick.bind(this)}>
                                            <div className="input-group">
                                                <input id="input_field" type="text" className="form-control" ref="inputAddress" placeholder="Input Address Here" required={true} />
                                                <div className="input-group-btn">
                                                    <a href="#/locateByAddress" className="btn btn-default" id="address_button" onClick={this.onUserClick.bind(this)}><i className="glyphicon glyphicon-search"></i></a>
                                                </div>
                                            </div>
                                        </form>
                                    </li>
                                    <li id="or"><p>or</p></li>
                                    <li id="location_button"><a className="navlink" href="#/locateByCurrentLocation" ><span className="glyphicon glyphicon-map-marker"></span>Use Current Location</a></li>
                                    <li ><a className="navlink" id="locate_button">
                                        <span className="glyphicon glyphicon-map-marker"></span>Locate Agent</a></li>
                                    <li><a className="navlink">
                                        Contact&nbsp;Us
                                        </a>
                                    </li>
                                    <li className="dropdown"><a id="sign-in-btn" className="dropdown-toggle navlink" data-toggle="dropdown" href="#"><span className="glyphicon glyphicon-user"></span> Login<span className="caret"></span></a>
                                        <ul className="dropdown-menu">
                                            {(this.state && this.state.new_data) ? this.state.new_data.map(i => {
                                                let url = "#/userprofile/" + i.name
                                                return (<li key={Math.random()}><a key={Math.random()} href={url}>{i.name}</a></li>)
                                            }) : ""
                                            }
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                {(this.state && this.state.new_data) ?
                    <div className="container-fluid"><div className="row "> <Main data={this.state.new_data} inputAddress={this.state.input_address} /></div> </div> : <div>Not Found</div>
                }
            </div>
        );
    }
}