import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import useAxios from "../Hooks/useAxios";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const AuthProvider = ({ children }) => {
  const axiosNonSecure = useAxios();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  // create user
  const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // onAuthStateChange

  useEffect(() => {
    const unsubscrube = onAuthStateChanged(auth, (currentUser) => {
      console.log("current User ", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscrube();
    };
  }, [axiosNonSecure]);

  // login user
  const loginUser = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // LOGIN WITH GOOGLE
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // LOGIN WITH facebook
  const signInWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  //logout user
  const logoutUser = () => {
    setLoading(true);
    setUser(null);
    return signOut(auth);
  };

  const authinfo = {
    user,
    loading,
    setLoading,
    createUser,
    loginUser,
    signInWithFacebook,
    signInWithGoogle,
    logoutUser,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
