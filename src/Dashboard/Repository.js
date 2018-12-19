import React, { Component } from 'react';
import Initials from './initials';
export default class Repository extends Component {
    render() {
        return (
            <div>
                <Initials name={this.props.data.name} address={this.props.data.address} email={this.props.data.email} phone={this.props.data.contact} />
            </div>
        );
    }
}