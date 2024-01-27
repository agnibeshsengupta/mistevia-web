"use client";
import React from 'react';
import { Image, Card, CardFooter, Chip } from '@nextui-org/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MenuSlider = ({ menuList }) => {
    return (
        <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                '@0.75': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                '@1.00': {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                '@1.50': {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}
            modules={[Autoplay, Navigation]}
        >
            {menuList.map((item, index) =>
                <SwiperSlide key={`${item.name}-${index}`}>
                    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7" isDisabled={!item.isLive}>
                        <Image
                            removeWrapper
                            alt={item.name}
                            className="z-0 w-full h-full object-cover"
                            src={item.imgSrc}
                        />
                        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">

                            <div className="flex flex-grow gap-2 items-center">
                                {item.isNew && <Chip
                                    variant="shadow"
                                    classNames={{
                                        base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                                        content: "drop-shadow shadow-black text-white",
                                    }}
                                >
                                    New
                                </Chip>}
                                <div className="flex flex-col">
                                    <p className=" text-lg text-white">{item.name}</p>
                                </div>
                            </div>
                            <Chip color="default">{item.price}</Chip>
                        </CardFooter>
                    </Card>
                </SwiperSlide>)
            }
        </Swiper >
    );
}

export default MenuSlider;