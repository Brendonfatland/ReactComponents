import React from "react";

const CommentDetail = props => {
  console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>

      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <span className="date"> {props.timeAgo} </span>
      </div>
      <div className="text">{props.userText}</div>
    </div>
  );
};

export default CommentDetail;
