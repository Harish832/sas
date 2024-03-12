import React from 'react'
import'./app.css';
import Navbar from './component/Navbar/Navbar';
import Home from'./component/Home/Home';
import Main from './component/Main/Main';
import Footer from'./component/Footer/Footer';
const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Main/> 
      <Footer/> 
    </>
  )
}

export default App
