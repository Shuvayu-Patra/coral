import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { signOut } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDApISodCR2pMMi48tYdzzWof6_Zpgr390",
  authDomain: "coral-d9a1f.firebaseapp.com",
  projectId: "coral-d9a1f",
  storageBucket: "coral-d9a1f.appspot.com",
  messagingSenderId: "115418950473",
  appId: "1:115418950473:web:1048eaada744709a024898",
  databaseURL: "https://coral-d9a1f-default-rtdb.firebaseio.com",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const db = getDatabase(app);

const firebaseContext = createContext(null);

export const useFirebase = () => {
  return useContext(firebaseContext);
};

export const FirebaseProvider = ({ children }) => {
  const signinWithGoogle = () => {
    signInWithPopup(auth, provider).catch((error) => {
      console.log(error);
    });
  };

  const signout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const signupUserWithEmailandPassword = (name, email, password) => {
    console.log(name, email, password);
    createUserWithEmailAndPassword(auth, email, password).then((user)=>{
      set(ref(db,  `users/${user?.uid}`), {
        name: name,
        email: email,
      })
    })
  };

  const signinUserWithEmailandPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((user)=>{
      console.log(user)
    })
  }

  const value = {
    signinWithGoogle,
    signOut,
    signupUserWithEmailandPassword,
    signinUserWithEmailandPassword
  };

  return (
    <firebaseContext.Provider value={value}>
      {children}
    </firebaseContext.Provider>
  );
};
