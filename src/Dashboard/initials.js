import React, { Component } from 'react';
import Avatar from 'react-avatar';
class Initials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-2 ">

                    <Avatar color={Avatar.getRandomColor('sitebase', ['palegreen'])}
                        name={this.props.name}
                        round={true} />
                </div>
                <div className="col-sm-8">
                    <PersonalData name="Name" value={this.props.name} />
                    <PersonalData name="Address" value={this.props.address} />
                    <PersonalData name="Email" value={this.props.email} />
                    <PersonalData name="Contact Number" value={this.props.phone} />
                </div>
            </div >

        );
    }



}
class PersonalData extends Component {
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
export default Initials;