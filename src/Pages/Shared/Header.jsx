import React from 'react'
import { FaBeer } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='heading_container d-flex justify-content-between'>
      <div className="heading_title">
        <h2>Headphone</h2>
        <p>For the top Band</p>
      </div>
      <div className="search_bar d-flex justify-content-end gap-3">
        <div className="searching">
          <input type="text" />
        </div>
        <div className="icon d-flex gap-2">
          <h2><FaBeer /></h2>
          <h2><FaBeer /></h2>
          <h2><FaBeer /></h2>
        </div>
      </div>
    </div>
  )
}

export default Header