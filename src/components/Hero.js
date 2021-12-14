import React from 'react'
import image from "../images/logo.JPG"
const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="flex-col hero-content lg:flex-row-reverse">
                <img src={image} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="mb-5 text-5xl font-bold">Next Level Recon</h1>
                    <p className="mb-5">
                        Hi, I'm Alex Andrews the owner of Next Level Recon and would love to do business with you
                    </p>
                    <button className="btn btn-success">Let's Work Together</button>
                </div>
            </div>

        </div>
    )
}

export default Hero
