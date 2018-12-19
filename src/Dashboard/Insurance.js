import React, { Component } from 'react';
class Insurance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            new_data: null,
            life_text: 'Life insurance is a contract between an insurance policy holder and an insurer or assurer, where the insurer promises to pay a designated beneficiary a sum of money in exchange for a premium, upon the death of an insured person',
            travel_text: 'Travel insurance is insurance that is intended to cover medical expenses, trip cancellation, lost luggage, flight accident and other losses incurred while traveling. Travel insurance can usually be arranged at the time of the booking of a trip to cover exactly the duration of that trip, or a "multi-trip" policy can cover an unlimited number of trips within a set time frame.',
            home_text: "Home insurance, also commonly called homeowner's insurance , is a type of property insurance that covers a private residence. It is an insurance policy that combines various personal insurance protections, which can include losses occurring to one's home, its contents, loss of use (additional living expenses), or loss of other personal possessions of the homeowner, as well as liability insurance for accidents that may happen at the home or at the hands of the homeowner within the policy territory.",
            LifeCoverage: {},
            TravelCoverage: {},
            HomeCoverage: {},
        }

    }
    componentDidMount() {
        this.props.data.Life_Insurance.map(i => {
            Object.keys(i).map((key) => {
                this.state.LifeCoverage[key] = i[key].toString()
            })
            this.setState({ LifeCoverage: this.state.LifeCoverage });

        })

        this.props.data.Travel_Insurance.map(i => {
            Object.keys(i).map((key) => {
                this.state.TravelCoverage[key] = i[key].toString()
            })
            this.setState({ TravelCoverage: this.state.TravelCoverage });

        })
        this.props.data.Home_Insurance.map(i => {
            Object.keys(i).map((key) => {
                this.state.HomeCoverage[key] = i[key].toString()
            })
            this.setState({ HomeCoverage: this.state.HomeCoverage });

        })
    }
    render() {
        //console.log(this.state.LifeCoverage)
        return (
            <div >
                <InsuranceData name="Life Insuarnce" id="#LifeModal" data={this.state.life_text} />
                <ModalData name="Life Insuarnce" id="LifeModal" data={this.state.LifeCoverage} />
                <hr width="100%" />
                <InsuranceData name="Travel Insurance" id="#TravelModal" data={this.state.travel_text} />
                <ModalData name="Travel Insurance" id="TravelModal" data={this.state.TravelCoverage} />
                <hr />
                <InsuranceData name="Home Insurance" id="#HomeModal" data={this.state.home_text} />
                <ModalData name="Home Insurance" id="HomeModal" data={this.state.HomeCoverage} />
                <hr />
            </div>
        );
    }
}
class InsuranceData extends Component {
    render() {
        //console.log(this.props.name)
        return (
            <div className="row with-no-bottom-margin">
                <div className="col-sm-12">
                    <p className="strong" >{this.props.name}</p>
                    <p >{this.props.data}</p>
                    <a className="pointer" data-toggle="modal" data-target={this.props.id}>Click here to know more</a>
                </div>
            </div>
        );
    }
}
class ModalData extends Component {
    render() {
        //console.log("In Modal" + this.props.data)
        return (
            <div className="row ">
                <div className="col-sm-8">
                    <div className="modal fade" tabIndex="-1" id={this.props.id} >
                        <div className="modal-dialog modal-dialog-centered modal-lg-12">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">{this.props.name}</h4>
                                </div>
                                <div className="modal-body">
                                    {Object.keys(this.props.data).map((key) => {
                                        return (<div key={Math.random()}><h6>{key}</h6><p>{this.props.data[key].toString()}</p></div>)
                                    })}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Insurance;