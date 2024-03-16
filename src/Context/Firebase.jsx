import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDApISodCR2pMMi48tYdzzWof6_Zpgr390",
  authDomain: "coral-d9a1f.firebaseapp.com",
  projectId: "coral-d9a1f",
  storageBucket: "coral-d9a1f.appspot.com",
  messagingSenderId: "115418950473",
  appId: "1:115418950473:web:1048eaada744709a024898",
};
const app = initializeApp(firebaseConfig);

const firebaseContext = createContext(null);

export const useFirebase = () => {
  return useContext(firebaseContext);
};

export const FirebaseProvider = ({ children }) => {
  return (
    <firebaseContext.Provider value={app}>{children}</firebaseContext.Provider>
  );
};
