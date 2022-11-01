import React, { Component } from "react";
import Link from "../Link/Link";
import styles from "./Header.module.css";
import getNavigation from "../../utils/navigation";
import UserContext from "../../Context";

class Header extends Component {
   static contextType = UserContext;

   render() {
      const { loggedIn, user } = this.context;
      const links = getNavigation(loggedIn, user);

      return (
         <nav className={styles.Header}>
            <ul>
               <img src="/white-origami-bird.png" alt="Origami" />
               {
                  links.map(navElement => {
                     return (
                        <Link
                           key={navElement.title}
                           title={navElement.title}
                           href={navElement.link}
                        />
                     )
                  })
               }
            </ul>
         </nav>
      );
   }
}

export default Header;