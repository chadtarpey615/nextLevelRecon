import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { getAuth } from "firebase/auth"
import image from "../images/logo.JPG"





const Navbar = () => {
    const [mobile, setMobile] = useState(false)
    const [user, setUser] = useState(null)
    const auth = getAuth()


    useEffect(() => {
        setUser(auth.currentUser)
    }, [auth.currentUser])

    return (
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
            <div className="dropdown dropdown-hover dropdown-right visible md:invisible lg:invisible">

                <button class="btn btn-square btn-ghost" onClick={() => setMobile(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    {mobile && (
                        <ul tabindex="0" class="p-6 shadow menu dropdown-content bg-base-100 rounded-box w-52">

                            <Link className="mb-3" to="/">Home</Link>
                            <Link className="mb-3" to="/pricelist">Price List</Link>
                            <Link className="mb-3" to="/sign-up">Sign Up</Link>
                            <Link className="mb-3" to="/sign-in">Sign In</Link>

                        </ul>
                    )}
                </button>
            </div>
            <div className="flex-none px-2 mx-2">
                <span className="text-lg font-bold">
                    Next-Level-Recon
          </span>
            </div>
            <div className="flex-1 px-2 mx-2">
                <div className="items-stretch invisible md:visible lg:flex">

                    {/* <a href="/" className="btn btn-ghost btn-sm rounded-btn">
                        Home
            </a> */}
                    <Link to="/" className="btn btn-ghost btn-sm rounded-btn">Home</Link>
                    <Link to="/pricelist" className="btn btn-ghost btn-sm rounded-btn">Price List</Link>
                    <Link to="/sign-up" className="btn btn-ghost btn-sm rounded-btn">Sign-up</Link>
                    <Link to="/sign-in" className="btn btn-ghost btn-sm rounded-btn">Sign-in</Link>
                    {user && (
                        <li>{user.displayName}</li>
                    )}


                    {/* <a href="/pricelist" className="btn btn-ghost btn-sm rounded-btn">
                        Price List
            </a>
                    <a href="_blank" className="btn btn-ghost btn-sm rounded-btn">
                        Contact
            </a> */}
                </div>
            </div>

            <div className="flex-none pb-3">
                <button className="btn btn-square btn-ghost">
                    <img src={image} alt="work projects" />
                </button>
            </div>
        </div>






    )
}

export default Navbar;


