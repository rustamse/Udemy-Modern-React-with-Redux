import React from "react";
import ReactDom from "react-dom";

import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {lat: null, errorMessage: ""};

        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (positionError) => this.setState({errorMessage: positionError.message})
        );
    }

    render() {
        if (!this.state.errorMessage) {
            if (!this.state.lat) {
                return (
                    <div>Loading...</div>
                );
            } else {
                return (
                    <div>Latitude: {this.state.lat}</div>
                );
            }
        } else {
            return (
                <div>Error: {this.state.errorMessage}</div>
            );
        }
    }
}

ReactDom
    .render(
        <App/>,
        document
            .querySelector(
                "#root"
            ))
;
