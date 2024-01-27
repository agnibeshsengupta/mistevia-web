import { Image, Button, Link } from '@nextui-org/react';
import React from 'react';


function HeroSection() {
    return (
        <section className="relative w-full h-auto">
            <Image src="/assets/images/HeroImage.jpg" width="100%" className='object-contain' fill
                alt="bg"
            />
            <div className="w-full z-20 absolute bottom-0 px-1 py-1 sm:py-10 xl:py-20">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-lg sm:text-2xl md:text-5xl lg:text-7xl font-extrabold tracking-widest text-gray-dark">
                        Mistevia
                    </p>
                    <p className="text-xs sm:text-base md:text-2xl lg:text-3xl text-bluedark mx-2"> A Culinary Symphony of Healthy and Sugar-Free Delights</p>
                </div>
            </div>

        </section>
    );
}

export default HeroSection;