import React from 'react';
import { Avatar } from "@nextui-org/react";
import { reviews } from "../../constants/Header"

function Reviews(props) {
    return (
        <section id="review-section" className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center flex-wrap -m-4">
                    {reviews.map((item, index) =>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" key={`${item.reviewerName}-${index}`}>
                            <div className="h-full text-center flex flex-col justify-center items-center" >
                                <Avatar src={item.img} className="w-20 h-20 text-large flex md:flex-col " />
                                <p className="leading-relaxed font-semibold">{item.reviewComment}</p>
                                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-base">{item.reviewerName}</h2>
                            </div>
                        </div>)}
                </div>
            </div>
        </section>
    );
}

export default Reviews;