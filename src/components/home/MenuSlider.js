import React from 'react';
import { Image } from '@nextui-org/react';

function MenuSlider(props) {
    return (
        <section className="text-gray-600 body-font overflow-hidden bg-beige">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex">
                    <Image alt="sandwich" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/assets/images/veg_grilled_sandwich.png" />
                    <div className="lg:w-1/2 w-full lg:pl-2 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Veg Grilled Sandwich</h1><div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">₹ 50.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MenuSlider;