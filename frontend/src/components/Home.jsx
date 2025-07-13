import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
     <div className="bg-teal-400 h-screen flex flex-col justify-center items-center">
        <p className="text-2xl font-mono"> Welcome to </p><br/>
        <p className="text-6xl font-serif"> ETH Funder </p><br/><br/>
        <Link to="/funder" className='font-mono'>Fund Me</Link>
        <Link to="/walletinteract" className='font-mono'>Fund Someone Else</Link>
    </div>
  )
}

export default Home