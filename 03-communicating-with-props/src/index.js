import React from "react";
import ReactDOM from "react-dom";

import faker from "faker";

import CommentDetail from "./CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" content="Cool post!" postedTime="Today 6:00 PM"/>
            <CommentDetail author="Andrey" content="Awful post!" postedTime="Today 5:00 PM"/>
            <CommentDetail author="Igor" content="It's perfect post!!!" postedTime="Yesterday 6:00 PM"/>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"));
