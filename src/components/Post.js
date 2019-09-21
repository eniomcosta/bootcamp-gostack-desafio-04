import React, { Component } from "react";
import Comment from "./Comment";

class Post extends Component {
  render() {
    return (
      <div className="postItem">
        <div className="postHeader">
          <img className="avatar" src={this.props.post.author.avatar}></img>
          <div className="author-date">
            <span className="author">{this.props.post.author.name}</span>
            <span className="date">{this.props.post.date}</span>
          </div>
          <Comment
            key={this.props.post.comments}
            comments={this.props.post.comments}
          />
        </div>
      </div>
    );
  }
}

export default Post;
