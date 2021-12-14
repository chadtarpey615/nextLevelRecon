import React from 'react'

// import image from "./../../images/Next-Level-Recon-Logo-TEXT-WEB.JPG"
// import card from "./../../images/alexcard1024_1 2.jpg"

const Footer = () => {
    return (
        <footer className="p-10 footer bg-base-200 text-base-content">
            <div>
                <span className="footer-title">Services</span>
                <a herf="_blank" className="link link-hover">Branding</a>
                <a herf="_blank" className="link link-hover">Design</a>
                <a herf="_blank" className="link link-hover">Marketing</a>
                <a herf="_blank" className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a herf="_blank" className="link link-hover">About us</a>
                <a herf="_blank" className="link link-hover">Contact</a>
                <a herf="_blank" className="link link-hover">Jobs</a>
                <a herf="_blank" className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a herf="_blank" className="link link-hover">Terms of use</a>
                <a herf="_blank" className="link link-hover">Privacy policy</a>
                <a herf="_blank" className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="w-full pr-16 input input-bordered" />
                        <button className="absolute top-0 right-0 rounded-l-none btn btn-Success">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer
