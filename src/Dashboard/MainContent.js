import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import MapRepository from '../../src/MapComponents/MapContent';
import Panel from './Panel';
export default class Main extends Component {
    render() {
        return (
            <main>
                <HashRouter>
                    <Switch>
                        {this.props.data.map(i => {
                            let url = "/userprofile/" + i.name;
                            return (<Route key={Math.random()} exact path={url} render={() => <Panel data={i} />} />)
                        })
                        }
                        <Route path='/locateByCurrentLocation' render={() => <MapRepository inputAddressFlag={false} inputAddress={null} />} />
                        <Route exact path="/locateByAddress" render={() => <MapRepository inputAddressFlag={true} inputAddress={this.props.inputAddress} />} />
                    </Switch>
                </HashRouter>
            </main>
        );
    }
}