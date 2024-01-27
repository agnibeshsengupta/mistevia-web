import React from 'react';
import { Avatar } from "@nextui-org/react";

function Aboutus(props) {
    return (
        <section className="text-gray-600 body-font bg-bluedark text-white">
            <div className="container px-5 py-16 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <Avatar src="/assets/images/agnibesh.jpg" className="w-20 h-20 text-large" />
                            </div>
                            <div className="flex flex-col items-center text-center justify-center">
                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Agnibesh Sengupta</h2>
                                <div className="w-12 h-1 bg-yellow rounded mt-2 mb-4"></div>
                                <p className="text-base">Owner of Mistevia, MSc. Agricultural Biotechnology & Photographer</p>
                            </div>
                        </div>
                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p className="leading-relaxed text-lg mb-4">
                                Cooking is my ultimate passion – a canvas where I express creativity and a love for wholesome, delicious food. My culinary journey is fueled by the challenge of crafting sugar-free and gluten-free dishes. I believe in the art of balance, creating meals that are not just healthy but bursting with flavors. Every dish I prepare is a celebration of taste, proving that vibrant, nutrient-rich ingredients can be the foundation of culinary excellence. In my kitchen, cooking isn't just a trend; it's a lifestyle focused on nourishing the body without compromising on flavor. I find joy in sharing suger and gluten free indulgence and showcasing that healthy eating is a delightful journey.</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aboutus;