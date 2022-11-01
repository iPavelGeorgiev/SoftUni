import React from "react";
import PostAuthor from "../PostAuthor/PostAuthor";
import styles from "./Post.module.css";

function Post({description, author}) {
   return (
      <div className={styles.Post}>
         <img src="blue-origami-bird.png" alt="Origami"/>
         <p className={styles.description}>
            {description}
         </p>
         <div>
            <PostAuthor name={author.username}/>
         </div>
      </div>
   );
}

export default Post;