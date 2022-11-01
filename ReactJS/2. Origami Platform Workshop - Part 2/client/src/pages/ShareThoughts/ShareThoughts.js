import React, { Component } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import Post from "../../components/Post/Post";
import Title from "../../components/Title/Title";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import styles from "./ShareThoughts.module.css";

class ShareThoughts extends Component {
   constructor(props) {
      super(props)

      this.state = {
         posts: [],
         xPosts: 3,
         totalPosts: 0
      }
   }

   getXAmountPosts = async (x) => {
      try {
         const promise = await fetch("http://localhost:9999/api/origami/");
         const posts = await promise.json();
         const xPosts = posts.slice(-x);

         this.setState({
            posts: xPosts,
            totalPosts: posts.length - 1
         });
      } catch (err) {
         console.log(err);
      }
   }

   componentDidMount() {
      this.getXAmountPosts(this.state.xPosts);
   }

   render() {
      const { posts, xPosts } = this.state;

      return (
         <PageLayout>
            <div class={styles.Input}>
               <div>
                  <Title title="Share your thoughts" size="h1" />
                  <textarea />
                  <SubmitButton title="Post" />
               </div>
               <div>
                  <Title
                     title={`Last ${xPosts} posts on your wall`}
                     size="h2"
                  />

                  {posts.map((post, index) => {
                     return <Post key={post._id} index={index} {...post} />
                  })}
               </div>
            </div>
         </PageLayout>
      );
   }
}

export default ShareThoughts;