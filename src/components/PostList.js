import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png',
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png"
        },
        date: "05 Jun 2019",
        content: "Saaaaaai daiiiiiiiiii",
        comments: [
          {
            id: 2,
            author: {
              name: "Clara Lisboa",
              avatar: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
            },
            content: "Comentário qualquer, quero nem saber"
          },
          {
            id: 3,
            author: {
              name: "Cézar Toledo",
              avatar: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png"
            },
            content: "Esse comentário não ta nem aqui"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <section class="container column">
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    );
  }
}

export default PostList;
