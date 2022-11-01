import React, { Component } from "react";
import Post from "../../components/Post/Post";
import PageLayout from "../../components/PageLayout/PageLayout";
import Title from "../../components/Title/Title";
import styles from "./Publications.module.css";

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
         <PageLayout>
         <main className={styles.Main}>
            <Title title="Posts" size="h1"/>
            <div className={styles.Posts}>
               {posts.map((post, index) => {
                  return <Post key={post._id} index={index} {...post}/>
               })}
            </div>
         </main>
         </PageLayout>
      );
   }
}

export default Main;