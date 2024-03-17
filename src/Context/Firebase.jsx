import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDApISodCR2pMMi48tYdzzWof6_Zpgr390",
  authDomain: "coral-d9a1f.firebaseapp.com",
  projectId: "coral-d9a1f",
  storageBucket: "coral-d9a1f.appspot.com",
  messagingSenderId: "115418950473",
  appId: "1:115418950473:web:1048eaada744709a024898",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

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

  const value = {
    signinWithGoogle,
    signOut,
  };

  return (
    <firebaseContext.Provider value={value}>
      {children}
    </firebaseContext.Provider>
  );
};
