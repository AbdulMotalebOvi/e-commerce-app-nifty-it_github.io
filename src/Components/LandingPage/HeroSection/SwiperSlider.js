
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


import './hero.css';

// import required modules
import { Autoplay } from 'swiper/modules';

import ButtonBlack from '../../ButtonBlack/ButtonBlack'



// import required modules


export default function SwiperSlider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
            >
                <SwiperSlide>
                    <div className="bg_1 p-[10%]">
                        <div className="max-w-screen-xl  mx-auto ">

                            <div className="space-y-5">
                                <h2 className="text-3xl text-[#323232] font-medium  leading-10">Handmade <br /> Curved Coffee</h2>
                                <p className="w-full sm:w-[50%]">As rich and unique as the coffee beans it is intended for, this little scoop will make your morning ritual a special occasion every day.</p>
                                <ButtonBlack title='Discover now' />
                            </div>

                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg_2 p-[10%]">
                        <div className="max-w-screen-xl  mx-auto ">

                            <div className="space-y-5">
                                <h2 className="text-[22px] sm:text-3xl text-[#323232] font-medium  leading-10">Think Different & <br />do it otherwise </h2>
                                <p className="w-[50%]">As rich and unique as the coffee beans it is intended for.</p>
                                <ButtonBlack title='Discover now' />
                            </div>


                        </div>


                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg_3 p-[10%]">
                        <div className="max-w-screen-xl  mx-auto ">
                            <div className="space-y-1 mt-7">
                                <h2 className="text-[22px] sm:text-3xl text-[#323232] font-medium  leading-10 ">High Beam <br /> By Tom</h2>
                                <p className="w-[50%]">As rich and unique as the coffee beans it is intended for.</p>
                                <ButtonBlack title='Discover now' />
                            </div>
                        </div>

                    </div>
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
