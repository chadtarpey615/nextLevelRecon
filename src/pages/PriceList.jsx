import React, { useEffect } from "react";
import { options, additionalOptions } from "../API/Api";
const PriceList = () => {
    useEffect(() => {
        console.log(options);
    });
    return (
        <>
            <div className="flex justify-around">
                <h1 className=" font-large mt-10  text-lg">Price List</h1>
                <h1 className="text-center mt-10  font-large text-lg">
                    Additional Options
                </h1>
            </div>
            <div className="w-full shadow stats columns-1">
                <div className="grid stat justify-center justify-items-stretch place-items-center gap-10 ">
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

                <div className="grid stat justify-center justify-items-stretch place-items-center gap-10 ">
                    {additionalOptions.map((add) => (
                        <div className="grid ">
                            <div className="stat-title  mb-5">{add.name}</div>
                            <div className=" stat-value text-success">
                                ${add.price}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PriceList;
