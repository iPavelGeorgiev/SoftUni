import React, { Component } from "react";
import Link from "../Link/Link";
import styles from "./Aside.module.css";
import getNavigation from "../../utils/navigation";
import UserContext from "../../Context";

class Aside extends Component {
   static contextType = UserContext;

   render() {
      const { loggedIn, user } = this.context;
      const links = getNavigation(loggedIn, user);

      return (
         <aside className={styles.Aside}>
            <ul>
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
         </aside>
      );
   }
}

export default Aside;