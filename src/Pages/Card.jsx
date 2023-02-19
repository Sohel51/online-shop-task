import React from 'react'
import { FaBeer, FaAngellist } from 'react-icons/fa';

const Card = () => {
    return (
        <>
            <div className="cards d-flex gap-3">
                <div className="card p-2 text-center">
                    <div className="img">
                        <FaAngellist style={{ fontSize: '70px' }} />
                    </div>
                    <h3>Original Beats Pro</h3>
                    <p>Price- 81$</p>
                    <div className="label d-flex justify-content-between">
                        <p>*4.9</p>
                        <h3><FaBeer /></h3>
                    </div>
                </div>
                <div className="card p-2 text-center">
                    <div className="img">
                        <FaAngellist style={{ fontSize: '70px' }} />
                    </div>
                    <h3>Original Beats Pro</h3>
                    <p>Price- 81$</p>
                    <div className="label d-flex justify-content-between">
                        <p>*4.9</p>
                        <h3><FaBeer /></h3>
                    </div>
                </div>
                <div className="card p-2 text-center">
                    <div className="img">
                        <FaAngellist style={{ fontSize: '70px' }} />
                    </div>
                    <h3>Original Beats Pro</h3>
                    <p>Price- 81$</p>
                    <div className="label d-flex justify-content-between">
                        <p>*4.9</p>
                        <h3><FaBeer /></h3>
                    </div>
                </div>
                <div className="card p-2 text-center">
                    <div className="img">
                        <FaAngellist style={{ fontSize: '70px' }} />
                    </div>
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