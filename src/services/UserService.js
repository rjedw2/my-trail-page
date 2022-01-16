import { useState } from "react";
import Firebase from "./FirebaseService";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
const auth = Firebase.auth;

export default function UserService() {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return {
    isLoggedIn: () => {
      return user && user.uid;
    },
    getUser: () => {
      return user;
    },
    login: () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((user) => {
          console.log(user);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    logout: async () => {
      await signOut(auth);
    },
  };
}
