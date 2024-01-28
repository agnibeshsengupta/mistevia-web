import React from 'react';
import { MenuList } from "../../constants/Menu"
import MenuSlider from "../common/MenuSlider"


const MisteviaMenu = () => {
    return (
        <section id="#menu" className="text-gray-600 body-font overflow-hidden bg-gray-dark h-4/6">
            <div className="container px-5 py-16 mx-auto">
                <h2 className="font-medium title-font mt-4 text-white text-lg sm:text-2xl md:text-5xl">Our Menu</h2>
                <div className="w-60 h-1 bg-yellow rounded mt-2 mb-8"></div>
                <div className='h-4/6'><MenuSlider menuList={MenuList} /></div>
                <p className=" title-font mt-4 text-white text-lg sm:text-xl md:text-lg">* Product images are for illustrative purposes only and may differ from the actual product</p>
            </div>
        </section >
    );
}

export default MisteviaMenu;