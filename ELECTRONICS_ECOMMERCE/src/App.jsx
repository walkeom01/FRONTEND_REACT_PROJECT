import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Category from './components/Category/Category.jsx'
import Category2 from './components/Category/Category2.jsx'
import Services from './components/Services/Services.jsx'
import Banner from './components/Banner/Banner.jsx';
import headphone from './assets/hero/headphone.png';
import Product from './components/Product/Product.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import Partners from './components/Partners/Partners.jsx'
import Footer from './components/Footer/Footer.jsx'

const BannerData ={
  discount : "30%",
  title : "fine smile",
  date : "2 april 2026",
  image : headphone ,
  title2 :"air solo bass",
  title3 : "winter sale",
  title4 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, exercitationem.",
  bgColor : "#f42c37"
   

};
const BannerData2 ={
  discount : "30%",
  title : "fine smile",
  date : "2 april 2026",
  image : headphone ,
  title2 :"air solo bass",
  title3 : "winter sale",
  title4 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, exercitationem.",
  bgColor : "#2dcc6f"
   

};
const App = () => {
  return (
    <div className='dark:bg-gray-800 dark:text-white duration-700 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category></Category>
      <Category2></Category2>
      <Services></Services>
      <Banner data={BannerData}></Banner>
      <Product></Product>
      <Banner data={BannerData2}></Banner>
      <Blogs></Blogs>
      <Partners></Partners>
      <Footer></Footer>
    </div>
  )
}

export default App