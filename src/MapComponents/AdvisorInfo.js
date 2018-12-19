import React, { Component, StyleSheet } from 'react';
import Avatar from 'react-avatar';
export default class AdvisorInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.error_flag === true) {
            return (
                <div className="advisorwindowWrongInput">
                    <p>Sorry! Wrong Input Address format
                    Please try again with another Valid Input</p>
                </div>)
        }

        else if (this.props.default_marker && this.props.flag !== true && this.props.default_flag === true) {
            return (
                <div className="advisorwindow">
                    <Avatar name={this.props.default_marker.name} size="60" textSizeRatio={1.75} round={true} />
                    <form >
                        <div className="form-group">
                            <label >Name: </label>
                            <label >{this.props.default_marker.name}</label>
                        </div>
                        <div className="form-group">
                            <label >Address: </label>
                            <label>{this.props.default_marker.address}</label>
                        </div>
                    </form>
                </div>)
        }
        else if (this.props.data && this.props.flag === true) {
            return (<div className="advisorwindow ">
                <Avatar name={this.props.data.name} size="60" textSizeRatio={1.75} round={true} />
                <form>
                    <div className="form-group">
                        <label >Name: </label>
                        <label >{this.props.data.name}</label>
                    </div>
                    <div className="form-group">
                        <label >Address: </label>
                        <label >{this.props.data.address}</label>
                    </div>
                </form>
            </div>)
        }
        else {
            return null;
        }
    }
}
