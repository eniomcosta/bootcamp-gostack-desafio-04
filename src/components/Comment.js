import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <div className="post-header">
        <img
          className="avatar-comment"
          src={this.props.comment.author.avatar}
        ></img>
        <div className="author-date comment-content">
          <span className="author">
            {this.props.comment.author.name + " "}
            <span className="comment-text">{this.props.comment.content}</span>
          </span>
        </div>
      </div>
    );
  }
}

export default Comment;
