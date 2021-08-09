import React, { useState } from "react";
import firebase from "firebase";
import { getUserDetails } from "services";

export function useProvideAuth() {
  const [user, setUser] = useState(null);

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

   const signup = (name, email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user.updateProfile({
          displayName: name
      }).then(() => (response.user));
    });
   }

   const setPersistance = (persistance) => {
    return firebase
       .auth()
       .setPersistence(persistance)
   };

   const sendPasswordResetEmail = (email) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
  }

   const PERSISTANCE = firebase.auth.Auth.Persistence;

  return {
    user,
    signin,
    signout,
    signup,
    setPersistance,
    sendPasswordResetEmail,
    PERSISTANCE
  };
}
