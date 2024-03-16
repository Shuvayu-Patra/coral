import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { FirebaseProvider } from "./Context/Firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <FirebaseProvider>
          <App />
        </FirebaseProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
