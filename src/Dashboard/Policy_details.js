import React, { Component } from 'react';
import '../../src/Styles/Policy_details.css';
import '../../src/Styles/Insurance.css';
import PolicyData from './PolicyData';
export default class Policy_details extends Component {
    render() {
        return (
            <div >
                <PolicyData name="Tracking Id" value={this.props.data.pending_policy[0].tracking_id} />
                <PolicyData name="Advisor Name" value={this.props.data.pending_policy[0].advisor_name} />
                <PolicyData name="Current Status" value={this.props.data.pending_policy[0].status} />
            </div>
        );
    }
}