import React from "react";
import styles from "./InvalidPath.module.css";
import Title from "../../components/Title/Title";
import PageLayout from "../../components/PageLayout/PageLayout";

const InvalidPath = () => {
   return (
      <PageLayout>
         <div className={styles.FourOFour}>
            <Title title="Something went wrong..." size="h1" />
            <img src="/404.jpg" alt="404 emoji" />
         </div>
      </PageLayout>
   );
}

export default InvalidPath;