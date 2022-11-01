import React, { Component } from "react";
import Post from "../Post/Post";
import styles from "./Main.module.css";

class Main extends Component {
   constructor(props) {
      super(props);

      this.state = {
         posts: []
      }
   }

   getPosts = async () => {
      try {
         const promise = await fetch("http://localhost:9999/api/origami/");
         const posts = await promise.json();

         this.setState({
            posts
         });
      } catch (err) {
         console.log(err);
      }
   }

   componentDidMount() {
      this.getPosts();
   }

   render() {
      const { posts } = this.state;

      return (
         <main className={styles.Main}>
            <h1 className={styles.Title}>Posts</h1>
            <div className={styles.Posts}>
               {posts.map(post => {
                  return <Post key={post._id} {...post}/>
               })}
            </div>
         </main>
      );
   }
}

export default Main;