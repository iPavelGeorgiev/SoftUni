import React, { Component, useState, useEffect } from "react";
import UserContext from "./Context";
import getCookie from "./utils/getCookie"

const Authorization = (props) => {
   const [user, setUser] = useState(null);
   const [loggedIn, setLoggedIn] = useState(null);
   const [loading, setLoading] = useState(true);

   const logIn = (user) => {
      setUser(user);
      setLoggedIn(true);
   }

   const logOut = (user) => {
      document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";

      setUser(null);
      setLoggedIn(false);
   }

   useEffect(() => {
      const token = getCookie('x-auth-token')

      if (!token) {
         logOut();
         setLoading(false);
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
         setLoading(false);
      }).catch(err => {
         console.log(err);
      });
   }, [])

   if (loading) {
      return (
         <div>Loading...</div>
      );
   }

      return (
         <UserContext.Provider value={{
            loggedIn,
            user,
            logIn,
            logOut
         }}>
            {props.children}
         </UserContext.Provider>
      )
}

export default Authorization;