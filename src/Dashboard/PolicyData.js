import React, { Component } from 'react';
export default class PolicyData extends Component {
    render() {
        return (
            <div className="row with-no-bottom-margin">
                <div className="col-sm-2">
                    <p className="strong">{this.props.name}</p>
                </div>
                <div className="col-sm-10">
                    <p>
                        {this.props.value}
                    </p>
                </div>
            </div>
        );
    }
}