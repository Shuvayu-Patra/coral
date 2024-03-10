import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import BrandLogo from '../Components/BrandLogo'
import PopularStyles from '../Components/PopularStyles'
import ProductList from '../Components/ProductList'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <BrandLogo/>
      <PopularStyles/>
      <ProductList title='Hot New Releases'/>
      <Banner/>
      <ProductList title='Best Sellers' isBestseller={true}/>
      <Footer/>
    </>
  )
}

export default Home
