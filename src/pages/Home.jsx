import React from 'react'
import Navbar from '../components/global/Navbar'
import Footer from '../components/global/footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className=' items-center justify-center text-5xl text-red-900 h-screen flex'> Hi at Prudent </div>
    <Footer/>
    </>
  )
}

export default Home