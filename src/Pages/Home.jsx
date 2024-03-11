import React from "react";
import HeroSection from "../Components/HeroSection";
import BrandLogo from "../Components/BrandLogo";
import PopularStyles from "../Components/PopularStyles";
import ProductList from "../Components/ProductList";
import Banner from "../Components/Banner";

function Home() {
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
