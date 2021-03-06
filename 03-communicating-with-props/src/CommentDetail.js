import React from "react";

const CommentDetail = (params) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={params.avatar}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {params.author}
                </a>
                <div className="metadata">
                    <span className="date">{params.postedTime}</span>
                </div>
                <div className="text">{params.content}</div>
            </div>
        </div>
    );
}

export default CommentDetail;
