import React, { Component } from "react";
import UserContext from "./Context";
import getCookie from "./utils/getCookie"

class Authorization extends Component {
   constructor(props) {
      super(props)

      this.state = {
         loggedIn: null,
         user: null
      }
   }

   static contextType = UserContext

   logIn = (user) => {
      this.setState({
         loggedIn: true,
         user
      })
   }

   logOut = (user) => {
      document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";

      this.setState({
         loggedIn: false,
         user: null
      })
   }

   componentDidMount() {
      const token = getCookie('x-auth-token')

      if (!token) {
         this.logOut()
         return;
      }

      fetch('http://localhost:9999/api/user/verify', {
         method: 'POST',
         body: JSON.stringify({
            token
         }),
         headers: {
            'Content-Type': 'application/json'
         }
      }).then(promise => {
         return promise.json()
      }).then(response => {
         if (response.status) {
            this.logIn({
               username: response.user.username,
               id: response.user._id
            })
         } else {
            this.logOut()
         }
      }).catch(err => {
         console.log(err);
      })
   }

   render() {
      const { loggedIn, user } = this.state;

      return (
         <UserContext.Provider value={{
            loggedIn,
            user,
            logIn: this.logIn,
            logOut: this.logOut
         }}>
            {this.props.children}
         </UserContext.Provider>
      )
   }
}

export default Authorization;