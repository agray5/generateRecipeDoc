import React, { useState } from "react";
import firebase from "firebase";
import { getUserDetails } from "services";

export function useProvideAuth() {
  const [user, setUser] = useState(null);
  // Firebase auth example code (ref: https://usehooks.com/useAuth/)
   const signin = (email, password) => {
     return firebase
       .auth()
       .signInWithEmailAndPassword(email, password)
       .then(response => {
         setUser(response.user);
         return response.user;
       });
   };
   const signout = () => {
     return firebase
       .auth()
       .signOut()
       .then(() => {
         setUser(false);
       });
   };

  return {
    user,
    signin,
    signout,
  };
}
