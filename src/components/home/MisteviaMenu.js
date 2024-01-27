import React from 'react';
import { MenuList } from "../../constants/Menu"
import MenuSlider from "../common/MenuSlider"
import { Tooltip } from "@nextui-org/react";
import { Info } from 'lucide-react';

const MisteviaMenu = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden bg-gray-dark h-4/6">
            <div className="container px-5 py-16 mx-auto">
                <div className='flex'>
                    <h2 className="font-medium title-font mt-4 text-white text-lg sm:text-2xl md:text-5xl">Our Menu</h2>
                    <Tooltip
                        key="disclaimer-tool-tip"
                        placement="right-start"
                        content="Product images are for illustrative purposes only and may differ from the actual product"
                        color="warning"
                    >
                        <Info color="#ffa970" />
                    </Tooltip>
                </div>
                <div className="w-60 h-1 bg-yellow rounded mt-2 mb-4"></div>
                <div className='h-4/6'><MenuSlider menuList={MenuList} /></div>
            </div>
        </section >
    );
}

export default MisteviaMenu;