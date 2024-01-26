import { Image, Button, Link } from '@nextui-org/react';
import React from 'react';


function HeroSection() {
    return (
        <section className="relative w-full h-auto">
            <Image src="/assets/images/HeroImage.jpg" width="100%" fill
                alt="bg"
            />
            <div className="w-full z-20 relative">
                <div className="flex flex-col items-center">
                    <p className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-widest text-gray-dark">
                        Mistevia
                    </p>
                    <p className="text-base md:text-2xl lg:text-5xl text-beige sm:text-wrap"> A Culinary Symphony of Healthy and Sugar-Free Delights</p>
                </div>
            </div>

        </section>
    );
}

export default HeroSection;