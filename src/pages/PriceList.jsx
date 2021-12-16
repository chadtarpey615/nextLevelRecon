import React, { useEffect } from "react";
import { options, additionalOptions } from "../API/Api";
const PriceList = () => {
    useEffect(() => {
        console.log(options);
    });
    return (
        <>
            {/* <div className="flex justify-around">
                <h1 className=" font-large mt-10  text-3xl">Price List</h1>
                <h1 className="text-center mt-10  text-3xl">
                    Additional Options
                </h1>
            </div>
            <div className="w-full shadow stats grid grid-flow-col">
                <div className=" grid stat justify-center justify-items-stretch place-items-center gap-10 ">
                    {options.map((option) => (
                        <div>
                            <div className="stat-figure text-primary"></div>
                            <div className="stat-title  mb-5">
                                {option.name}
                            </div>
                            <div className=" stat-value text-success">
                                ${option.price}
                            </div>
                        </div>
                    ))}
                </div>

                <div className=" stat justify-center justify-items-stretch place-items-center gap-10 ">
                    {additionalOptions.map((add) => (
                        <div className=" ">
                            <div className="stat-title  mb-5">{add.name}</div>
                            <div className=" stat-value text-success">
                                ${add.price}
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
            <h1 className="text-center text-3xl text-success mt-20">
                Price List
            </h1>

            <div className="grid grid-cols-2 md:justify-items-center justify-items-start mt-20">
                {options.map((option) => (
                    <>
                        <h1 className="py-5 px-20 text-sm md:text-2xl place-self-start md:place-self-auto">
                            {option.name}
                        </h1>
                        <h1 className=" text-success text-lg md:text-xl  place-self-center">
                            $ {option.price}
                        </h1>
                    </>
                ))}
            </div>

            <h1 className="text-center text-success text-3xl mt-20">
                Additional Options
            </h1>

            <div className="grid grid-cols-2 justify-items-center mt-20">
                {additionalOptions.map((option) => (
                    <>
                        <h1 className="py-5 px-20 text-sm md:text-2xl place-self-start md:place-self-auto">
                            {option.name}
                        </h1>
                        <h1 className=" text-success text-lg md:text-xl  place-self-center">
                            {option.price}
                        </h1>
                    </>
                ))}
            </div>
        </>
    );
};

export default PriceList;
