import React from 'react'
import { FaBeer } from 'react-icons/fa';

const Card = () => {
    return (
        <>
            <div className="cards d-flex gap-3">
                <div className="card p-3">
                    <div className="img"></div>
                    <h3>Original Beats Pro</h3>
                    <p>Price- 81$</p>
                    <div className="label d-flex justify-content-between">
                        <p>*4.9</p>
                        <h3><FaBeer /></h3>
                    </div>
                </div>
                <div className="card p-3">
                    <div className="img"></div>
                    <h3>Original Beats Pro</h3>
                    <p>Price- 81$</p>
                    <div className="label d-flex justify-content-between">
                        <p>*4.9</p>
                        <h3><FaBeer /></h3>
                    </div>
                </div>
                <div className="card p-3">
                    <div className="img"></div>
                    <h3>Original Beats Pro</h3>
                    <p>Price- 81$</p>
                    <div className="label d-flex justify-content-between">
                        <p>*4.9</p>
                        <h3><FaBeer /></h3>
                    </div>
                </div>
                <div className="card p-3">
                    <div className="img"></div>
                    <h3>Original Beats Pro</h3>
                    <p>Price- 81$</p>
                    <div className="label d-flex justify-content-between">
                        <p>*4.9</p>
                        <h3><FaBeer /></h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card