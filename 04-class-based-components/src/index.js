import React from "react";
import ReactDom from "react-dom";

import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (positionError) => console.log(positionError)
        );

        return (
            <div>Hello Season
                <SeasonDisplay></SeasonDisplay>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.querySelector("#root"));
