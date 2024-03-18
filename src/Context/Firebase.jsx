import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { signOut } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useToast } from "@chakra-ui/react";

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
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const FirebaseProvider = ({ children }) => {
  const toast = useToast();
  const [user, setUser] = useState(null);
  const [loggedin, setLoggedin] = useState(false);
  const [name, setName] = useState("");

  const signinWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast({
          title: "User Created Successfully.",
          status: "success",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: capitalizeFirstLetter(
            error.code.split("auth/")[1].split("-").join(" ")
          ),
          status: "error",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
      });
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        toast({
          title: "Signed out Successfully.",
          status: "success",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: capitalizeFirstLetter(
            error.code.split("auth/")[1].split("-").join(" ")
          ),
          status: "error",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
      });
  };

  const signupUserWithEmailandPassword = (name, email, password) => {
    setName(name);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast({
          title: "User Created Successfully.",
          status: "success",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: capitalizeFirstLetter(
            error.code.split("auth/")[1].split("-").join(" ")
          ),
          status: "error",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
      });
  };

  const signinUserWithEmailandPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast({
          title: "Signed in Successfully.",
          status: "success",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: capitalizeFirstLetter(
            error.code.split("auth/")[1].split("-").join(" ")
          ),
          status: "error",
          variant: "subtle",
          position: "top",
          isClosable: true,
        });
      });
  };

  const value = {
    signinWithGoogle,
    signOutUser,
    signupUserWithEmailandPassword,
    signinUserWithEmailandPassword,
    user,
    loggedin,
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoggedin(true);
        set(ref(db, `users/${user?.uid}`), {
          name,
          email: user?.email,
        });
      } else {
        setUser(null);
        setLoggedin(false);
      }
    });
  }, [user, name]);

  return (
    <firebaseContext.Provider value={value}>
      {children}
    </firebaseContext.Provider>
  );
};
