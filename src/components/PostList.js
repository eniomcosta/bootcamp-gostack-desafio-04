import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "05 Jun 2019",
        content: "Saaaaaai daiiiiiiiiii",
        comments: [
          {
            id: 2,
            author: {
              name: "Clara Lisboa",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Comentário qualquer, quero nem saber"
          },
          {
            id: 3,
            author: {
              name: "Cézar Toledo",
              avatar: "http://url-da-imagem.com/imagem.jpg"
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