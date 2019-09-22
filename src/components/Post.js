import React, { Component } from "react";
import Comment from "./Comment";

class Post extends Component {
  render() {
    return (
      <div className="post-item">
        <div className="post-header">
          <img className="avatar" src={this.props.post.author.avatar}></img>
          <div className="author-date">
            <span className="author">{this.props.post.author.name}</span>
            <span className="date">{this.props.post.date}</span>
          </div>
        </div>
        <div className="post-content">
          <span>{this.props.post.content}</span>
        </div>
        <div>
          <hr className="hr-comment" />
          {this.props.post.comments.map(c => (
            <Comment key={c.id} comment={c} />
          ))}
        </div>
      </div>
    );
  }
}

export default Post;
