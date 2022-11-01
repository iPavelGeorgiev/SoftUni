import React, { Component } from "react";
import Link from "../Link/Link";
import styles from "./Footer.module.css";
import UserContext from "../../Context";
import getNavigation from "../../utils/navigation";

class Footer extends Component {
   static contextType = UserContext;

   render() {
      const { loggedIn, user } = this.context;
      const link = getNavigation(loggedIn, user);

      return (
         <footer className={styles.Footer}>
            <ul>
               {
                  link.map(navElement => {
                     return (
                        <Link
                           key={navElement.title}
                           title={navElement.title}
                           href={navElement.link}
                        />
                     )
                  })
               }
               <img src="/blue-origami-bird-flipped.png" alt="Origami" />
            </ul>
            <p>Software University @ 2019</p>
         </footer>
      )
   }
}

export default Footer;