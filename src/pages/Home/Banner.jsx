import React from "react";
import banner from "../../assets/img/banner.jpg";

export const Banner = () => {
  return (
    <div
      className="w-full bg-cover bg-center min-h-screen text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="container mx-auto px-4 md:px-0 flex flex-col min-h-screen justify-center">
        <h1 className="text-4xl md:text-[56px] font-[700] mb-6">
          Your Sound, Your Story
        </h1>
        <p className="text-sm md:text-[20px] max-w-[532px] mb-14">
          Buy, sell, and rent musical instruments from trusted sellers. Connect
          with top music teachers and find your perfect sound.
        </p>

        <div className="flex gap-4 mb-50">
          <button className="px-3 md:px-[28px] py-2 md:py-[14px] border-2 border-[#A67C52] rounded-full text-[18px] bg-[#A67C52] hover:bg-transparent hover:text-[#A67C52] transition">
            Shop Now
          </button>
          <button className="px-3 md:px-[28px] py-2 md:py-[14px] border-2 border-[#A67C52] text-[#A67C52] rounded-full bg-transparent  hover:bg-[#A67C52] hover:text-white transition">
            Find Lessons
          </button>
        </div>

        <div className="flex gap-3 md:gap-14">
          <div className="text-center">
            <h3 className="text-[28px] font-[]">50K+</h3>
            <p className="text-gray-200 text-sm md:text-[18px] font-[400]">
              Active Listings
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-[28px] font-[]">15K+</h3>
            <p className="text-gray-200 text-sm md:text-[18px] font-[400]">
              Happy Musicians
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-[28px] font-[]">500+</h3>
            <p className="text-gray-200 text-sm md:text-[18px] font-[400]">
              Music Teachers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
