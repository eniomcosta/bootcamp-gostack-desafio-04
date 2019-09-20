import React, { Component } from "react";

class Post extends Component {
  render() {
    return <div className="item">{this.props.post.author.name}</div>;
  }
}

export default Post;
