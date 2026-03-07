"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
// import Link from "next/link";

const Banner = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        autoplay={{ delay: 4000 }}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero min-h-[70vh] md:min-h-screen"
            style={{
              backgroundImage:
                "url(https://plus.unsplash.com/premium_photo-1675807263788-5708e2bffdb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGVhbHRoJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D)",
            }}
          >
            <div className="hero-overlay bg-black/60"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Trusted Home Care Services
                </h1>
                <p className="mb-5 text-sm md:text-base">
                  Find reliable caretakers for children, elderly, and special
                  home care needs. Safe and professional support for your
                  family.
                </p>
                {/* <button className="btn btn-primary">Book Caregiver</button> */}
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero min-h-[70vh] md:min-h-screen"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1581578731548-c64695cc6952)",
            }}
          >
            <div className="hero-overlay bg-black/60"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Professional Babysitting
                </h1>
                <p className="mb-5 text-sm md:text-base">
                  Experienced babysitters ready to take care of your children
                  with love, safety, and responsibility.
                </p>
                {/* <button className="btn btn-primary">Find Babysitter</button> */}
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero min-h-[70vh] md:min-h-screen"
            style={{
              backgroundImage:
                "url(https://plus.unsplash.com/premium_photo-1666299677059-54f840ab8fa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SGVhbHRoJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D)",
            }}
          >
            <div className="hero-overlay bg-black/60"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Elderly Care at Home
                </h1>
                <p className="mb-5 text-sm md:text-base">
                  Compassionate caregivers providing daily support and
                  assistance for elderly family members at home.
                </p>
                {/* <Link href={"/services"} className="btn btn-primary">
                  Explore Services
                </Link> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
