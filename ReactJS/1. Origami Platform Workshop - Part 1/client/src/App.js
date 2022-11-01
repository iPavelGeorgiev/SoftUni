import React from 'react';
import Navigation from "./components/Navigation/Navigation";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Navigation />
      <div className={styles.Container}>
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
