import React, { useEffect } from "react";
import { options } from "../API/Api";
const PriceList = () => {
    useEffect(() => {
        console.log(options);
    });
    return (
        <>
            <h1 className="text-center mt-20 font-large text-lg">Price List</h1>
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
            </div>
        </>
    );
};

export default PriceList;
