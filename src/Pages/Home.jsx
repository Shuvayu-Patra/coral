import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import BrandLogo from '../Components/BrandLogo'
import PopularStyles from '../Components/PopularStyles'
import ProductList from '../Components/ProductList'
import Banner from '../Components/Banner'

function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <BrandLogo/>
      <PopularStyles/>
      <ProductList/>
      <Banner/>
    </>
  )
}

export default Home
