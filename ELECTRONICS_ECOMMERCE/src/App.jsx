import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Category from './components/Category/Category.jsx'
import Category2 from './components/Category/Category2.jsx'
import Services from './components/Services/Services.jsx'
 
const App = () => {
  return (
    <div className='dark:bg-gray-800 dark:text-white duration-700 overflow-hidden'>
      <Navbar />
      <Hero />
      <Category></Category>
      <Category2></Category2>
      <Services></Services>
    </div>
  )
}

export default App