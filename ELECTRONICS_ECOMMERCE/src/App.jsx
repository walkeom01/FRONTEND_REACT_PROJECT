import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Category from './components/Category/Category.jsx'
const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Category></Category>
    </div>
  )
}

export default App