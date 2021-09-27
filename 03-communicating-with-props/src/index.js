import React from "react";
import ReactDOM from "react-dom";

import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    content="Cool post!"
                    postedTime="Today 6:00 PM"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Andrey"
                    content="Awful post!"
                    postedTime="Today 5:00 PM"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Igor"
                    content="It's perfect post!!!"
                    postedTime="Yesterday 6:00 PM"
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector("#root"));
