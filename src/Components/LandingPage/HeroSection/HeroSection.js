
import Discover from './Discover';
import './hero.css';

import SwiperSlider from "./SwiperSlider";



export default function HeroSection() {

    return (
        <section>
            <>
                <SwiperSlider />

                <div className='swiper relative  after:absolute after:inset-0 top-[-30px] sm:top-[-60px] w-full h-full'>
                    <Discover />
                </div>

            </>
        </section>
    )
}
