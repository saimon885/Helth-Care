"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { GetFeedback } from "@/app/action/server/feedback";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const FeedbackCard = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const data = await GetFeedback();
        setFeedbacks(data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeedbacks();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
    );
  }

  if (!feedbacks.length) {
    return <div className="text-center py-10">No feedbacks found.</div>;
  }

  return (
    <div className="w-full py-12 bg-base-100">
      <div className="container mx-auto px-4">
        <Swiper
          spaceBetween={30}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper !pb-14"
        >
          {feedbacks.map((item) => {
            if (!item.payload) return null;

            const ratingCount = parseInt(item.payload.rating) || 5;

            return (
              <SwiperSlide key={item._id.toString()}>
                <div className="h-full bg-base-200 p-8 rounded-2xl shadow-sm border border-base-300 flex flex-col relative transition-all duration-300 hover:shadow-md group">
                  <FaQuoteLeft
                    className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors"
                    size={40}
                  />

                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        size={18}
                        className={`${
                          index < ratingCount
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <h3 className="font-bold text-xl mb-3 text-base-content capitalize">
                    {item.payload.serviceName}
                  </h3>

                  <p className="text-base-content/70 italic leading-relaxed flex-grow">
                    {item.payload.message}
                  </p>

                  <div className="mt-6 pt-6 border-t border-base-300 flex justify-between items-center">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Verified Review
                    </span>
                    <span className="text-xs text-base-content/50 font-medium">
                      {new Date(item.payload.submittedAt).toLocaleDateString(
                        undefined,
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        },
                      )}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: var(--p) !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </div>
  );
};

export default FeedbackCard;
