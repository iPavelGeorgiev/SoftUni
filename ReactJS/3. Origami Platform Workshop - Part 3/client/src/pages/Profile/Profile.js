import React, { Component } from "react";
import styles from "./Profile.module.css";
import PageLayout from "../../components/PageLayout/PageLayout";
import Title from "../../components/Title/Title";
import Post from "../../components/Post/Post";
import UserContext from "../../Context";

class Profile extends Component {
   constructor(props) {
      super(props)

      this.state = {
         username: "",
         posts: []
      }
   }

   static contextType = UserContext;

   getPosts = async () => {
      try {
         const userID = this.props.match.params.id
         const promise = await fetch(`http://localhost:9999/api/user/${userID}`)
         const response = await promise.json();
         this.setState({
            username: response.username,
            posts: response.posts
         });
      } catch (err) {
         console.log(err);
      }
   }

   logout = () => {
      this.context.logOut();
      this.props.history.push("/");
   }

   componentDidMount() {
      this.getPosts();
   }

   render() {
      const { username, posts } = this.state;
      const xPosts = posts.slice(-3);
      console.log(posts[0]);
      return (
         <PageLayout>
            <div className={styles.Profile}>
               <img src="/profile-icon.jpg" alt="profile-icon" />
               <div className={styles["personal-info"]}>
                  <p>
                     <span>Username: </span>
                     {username}
                  </p>
                  <p>
                     <span>Posts: </span>
                     {posts.length}
                  </p>
                  <button onClick={this.logout}>Logout</button>
               </div>
               <div>
                  <Title title="3 of your recent posts" size="h2" />
                  {xPosts.map((post, index) => {
                     return <Post key={post._id} index={index} {...post} />
                  })}
               </div>
            </div>
         </PageLayout>
      )
   }
}

export default Profile;