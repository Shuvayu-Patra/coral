import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./Styles/app.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Home />} />
    </Routes>
  );
}

export default App;
