import React, { Component, useState, useEffect } from "react";
import Post from "../../components/Post/Post";
import PageLayout from "../../components/PageLayout/PageLayout";
import Title from "../../components/Title/Title";
import styles from "./Publications.module.css";

const Main = (props) => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      (async () => {
         try {
            const promise = await fetch("http://localhost:9999/api/origami/");
            const response = await promise.json();
   
            setPosts(response);
         } catch (err) {
            console.log(err);
         }
      })();
   }, [])

   return (
      <PageLayout>
         <main className={styles.Main}>
            <Title title="Posts" size="h1" />
            <div className={styles.Posts}>
               {posts.map((post, index) => {
                  return <Post key={post._id} index={index} {...post} />
               })}
            </div>
         </main>
      </PageLayout>
   );
}

export default Main;