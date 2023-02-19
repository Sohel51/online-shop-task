import React from 'react'
import { FaBeer } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='sidebar_page'>
      <div className="title">
        <h1><FaBeer /> MK Sounds</h1>
      </div>
      <div className="menu">
        <h3><FaBeer /> Home </h3>
        <h3><FaBeer /> Explore</h3>
        <h3><FaBeer /> Saved</h3>
        <h3><FaBeer /> Cart</h3>
        <h3><FaBeer /> Selling</h3>
        <h3><FaBeer /> Profile</h3>
        <h3><FaBeer /> History</h3>
        <h3><FaBeer /> Contact Us</h3>
        <h3><FaBeer /> Settings</h3>
      </div>
      <div className="help p-3">
        <h3><FaBeer /></h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, numquam. Aperiam libero accusamus totam laboriosam!</p>
      </div>
    </div>
  )
}

export default Sidebar