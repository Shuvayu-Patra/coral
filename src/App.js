import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./Styles/app.css";
import ProductDetails from "./Pages/ProductDetails";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Category from "./Pages/Category";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:category" element={<Category/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
