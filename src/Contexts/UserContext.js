import { useContext, useState, createContext, useEffect } from "react";
import FirebaseService from "../services/FirebaseService";
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const UserContext = createContext();
export function UserContextProvider(props) {
  const [userInfo, setUserInfo] = useState({ isAuthenticated: null });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      FirebaseService.auth,
      (currentUser) => {
        let userProfile = {};
        if (currentUser && currentUser.uid) {
          userProfile = currentUser.toJSON();
          userProfile.isAuthenticated = true;

          //TODO: pull user data from firebase
        } else {
          userProfile.isAuthenticated = false;
        }

        setUserInfo(userProfile);
        return () => unsubscribe();
      }
    );
  }, []);

  return <UserContext.Provider value={userInfo} {...props} />;
}

const login = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(FirebaseService.auth, provider).catch((err) => {
    console.error(err);
  });
};
const logout = async () => {
  await signOut(FirebaseService.auth);
};
export function useUserInfo() {
  const user = useContext(UserContext);
  return { ...user, login, logout };
}
