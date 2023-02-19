import React from 'react'
import Card from './Card'
import Header from './Shared/Header'
import Sidebar from './Shared/Sidebar'
import { FaAccessibleIcon } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <div className="container d-flex gap-4">
        {/* sidebar */}
        <div className="sidebar">
          <Sidebar></Sidebar>
        </div>
        {/* body_part */}
        <div className="body mt-4">
          <div className="heading">
            <Header></Header>
          </div>
          <div className="content d-flex gap-4">
            <div className="products">
              <div className="main_product_card d-flex">
                <div className="img">
                  <FaAccessibleIcon style={{ fontSize: '200px' }} />
                </div>
                <div className="details">
                  <h3>Beats Studio</h3>
                  <p>******* <span>200+ Review</span></p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, soluta?</p>
                  <p>Price</p>
                  <div className="color_qt">
                    <p>Color:
                      <div className="div"></div>
                      <div className="div"></div>
                      <div className="div"></div>
                    </p>
                  </div>
                  <div className="label">
                    <div className="icon"></div>
                    <button type="button" className="btn btn-secondary">Add To Cart</button>
                    <button type="button" className="btn btn-secondary m-2">Buy Now</button>
                  </div>
                </div>
              </div><br />
              {/* card section */}
              <Card></Card>
              <div className="more_product">
                <h3>Explore the Popular Categories <span>See All</span></h3>
              </div>
            </div>
            {/* Right site Daily Items */}
            <div className="daily_items">
              <div className="box mb-5">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                <button type="button" className="btn btn-secondary m-2">Buy Now</button>
              </div>
              <div className="shortcut_item">
                <div className="item">
                  <img src="" alt="" />
                  <div className="title d-flex justify-content-between">
                    <h3>Best Headphone For</h3>
                    <p>Price 45$</p>
                  </div>
                </div>
                <div className="item">
                  <img src="" alt="" />
                  <div className="title d-flex justify-content-between">
                    <h3>Best Headphone For</h3>
                    <p>Price 45$</p>
                  </div>
                </div>
                <div className="item">
                  <img src="" alt="" />
                  <div className="title d-flex justify-content-between">
                    <h3>Best Headphone For</h3>
                    <p>Price 45$</p>
                  </div>
                </div>
                <div className="item">
                  <img src="" alt="" />
                  <div className="title d-flex justify-content-between">
                    <h3>Best Headphone For</h3>
                    <p>Price 45$</p>
                  </div>
                </div>
                <div className="item">
                  <img src="" alt="" />
                  <div className="title d-flex justify-content-between">
                    <h3>Best Headphone For</h3>
                    <p>Price 45$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home