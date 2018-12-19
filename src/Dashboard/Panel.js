import React, { Component } from 'react';
import Repository from './Repository';
import Policy_details from './Policy_details';
import Insurance from './Insurance';
import '../../src/Styles/Panel.css';
export default class Panel extends Component {
    render() {
        return (
            <div className="col-sm-10 col-md-10 col-lg-10 col-xs-10 col-sm-offset-1 col-xs-offset-1 col-md-offset-1 col-lg-offset-1">
                <div className="panel panel-default decorate">
                    <div className="panel-heading "><h3>Personal Information</h3></div>
                    <div className="panel-body">
                        <Repository data={this.props.data}  />
                    </div>
                    <div className="panel-heading"><h3>Incomplete Insurance</h3></div>
                    <div className="panel-body">
                        <Policy_details data={this.props.data}  />
                    </div>
                    <div className="panel-heading"><h3>Policy Details</h3></div>
                    <div className="panel-body">
                        <Insurance data={this.props.data}  />
                    </div>
                </div>
            </div>
        );
    }
}