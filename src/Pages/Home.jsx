import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import BrandLogo from '../Components/BrandLogo'
import PopularStyles from '../Components/PopularStyles'
import ProductList from '../Components/ProductList'

function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <BrandLogo/>
      <PopularStyles/>
      <ProductList/>
    </>
  )
}

export default Home
