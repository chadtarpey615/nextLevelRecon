import React, { useEffect } from 'react';
import { options } from "../API/Api";
import images from "../images/paint.jpeg";
// import "./cards.css"



const Card = ({ title, text }) => {


    return (
        <>
            <h1 className="text-center font-semibold text-white">Type Of Work</h1>

            <div className="grid grid-cols-1  lg:grid-cols-3 gap-2 md:grid-cols-2">
                {
                    options.map((option, i) => {
                        const { name, image } = option;
                        console.log(option)
                        return (

                            // <div className="card text-center shadow-2xl bg-gray-500 text-white">
                            //     <figure className="px-10 pt-10">
                            //         <img src={images} className=" max-w-sm rounded-lg shadow-2xl" />
                            //     </figure>
                            //     <div className="card-body">
                            //         <h2 className="card-title">{name}</h2>
                            //         <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
                            //         <div className="justify-center card-actions">
                            //             <button className="btn btn-outline btn-accent">More info</button>
                            //         </div>
                            //     </div>
                            // </div>

                            <div className="card shadow-xl image-full">
                                <figure>
                                    <img src={images} />
                                </figure>
                                <div className="justify-end card-body">
                                    <h2 className="card-title">{name}</h2>
                                    <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
                                    <div className="card-actions">
                                        <button className="btn btn-success">Get Started</button>
                                    </div>
                                </div>
                            </div>


                        )

                    }
                    )
                }
            </div>
        </>
    )









};

export default Card;
