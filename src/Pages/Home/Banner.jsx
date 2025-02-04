import React from 'react';
import first from '../../assets/1.jpg';
import second from '../../assets/2.jpg';
import third from '../../assets/3.jpg';
import four from '../../assets/4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="relative py-2 w-full h-[700px]">
      <Swiper
        className="absolute"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="absolute w-full h-[700px]">
          <img src={first} className="w-full h-[700px] object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-40">
            <h3 className="text-lg tracking-widest">Come to experience in WanderAsia</h3>
            <h1 className="text-6xl font-bold mt-2">GRAND CANYON</h1>
            <h2 className="text-4xl font-bold text-green-400 mt-2">GO EXPLORE</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Immerse yourself in breathtaking landscapes, vibrant cultures, and unforgettable adventures.
              Whether it's serene beaches, ancient temples, or lush jungles, WanderAsia has it all.
            </p>
            <button className="mt-6 px-6 py-3 btn btn-success text-white font-bold rounded-md shadow-md">
              Explore Now
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-[700px]">
          <img src={second} className="w-full h-[700px] object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-40">
            <h3 className="text-lg tracking-widest">Come to experience in WanderAsia</h3>
            <h1 className="text-6xl font-bold mt-2">BEAUTIFUL BEACHES</h1>
            <h2 className="text-4xl font-bold text-green-400 mt-2">RELAX AND UNWIND</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Relax on stunning beaches with crystal clear waters, perfect for sunbathing or water activities.
            </p>
            <button className="mt-6 px-6 py-3 btn btn-success text-white font-bold rounded-md shadow-md">
              Explore Now
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-[700px]">
          <img src={third} className="w-full h-[700px] object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-40">
            <h3 className="text-lg tracking-widest">Come to experience in WanderAsia</h3>
            <h1 className="text-6xl font-bold mt-2">ANCIENT TEMPLES</h1>
            <h2 className="text-4xl font-bold text-green-400 mt-2">EXPLORE HISTORY</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Explore magnificent temples steeped in history and experience the local culture at its finest.
            </p>
            <button className="mt-6 px-6 py-3 btn btn-success text-white font-bold rounded-md shadow-md">
              Explore Now
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative w-full h-[700px]">
          <img src={four} className="w-full h-[700px] object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-40">
            <h3 className="text-lg tracking-widest">Come to experience in WanderAsia</h3>
            <h1 className="text-6xl font-bold mt-2">LUSH JUNGLES</h1>
            <h2 className="text-4xl font-bold text-green-400 mt-2">ADVENTURE AWAITS</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Embark on thrilling jungle treks and discover the vibrant ecosystems that await you.
            </p>
            <button className="mt-6 px-6 py-3 btn btn-success text-white font-bold rounded-md shadow-md">
              Explore Now
            </button>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-8 flex space-x-2 w-full justify-center">
        <a href="#slide1" className="w-3 h-3 bg-white rounded-full"></a>
        <a href="#slide2" className="w-3 h-3 bg-white rounded-full"></a>
        <a href="#slide3" className="w-3 h-3 bg-white rounded-full"></a>
        <a href="#slide4" className="w-3 h-3 bg-white rounded-full"></a>
      </div>
    </div>
  );
};

export default Banner;
