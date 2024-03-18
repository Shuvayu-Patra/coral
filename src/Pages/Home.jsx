import React, { useEffect } from "react";
import HeroSection from "../Components/HeroSection";
import BrandLogo from "../Components/BrandLogo";
import PopularStyles from "../Components/PopularStyles";
import ProductList from "../Components/ProductList";
import Banner from "../Components/Banner";
import { useFirebase } from "../Context/Firebase";
import { useNavigate } from "react-router-dom";

function Home() {
  const loggedin = useFirebase().loggedin;
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    if(!loggedin) {
      navigate("/login");
    }
  }, [loggedin, navigate])
  
  return (
    <>
      <HeroSection />
      <BrandLogo />
      <PopularStyles />
      <ProductList title="Hot New Releases" />
      <Banner />
      <ProductList title="Best Sellers" isBestseller={true} />
    </>
  );
}

export default Home;
