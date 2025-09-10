import React from "react";
import bg from "../../assets/img/bg.jpg";

export const NewsLetter = () => {
  return (
    <div
      className="container mx-auto w-full bg-cover bg-center text-white rounded-[30px] mb-25"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full h-full bg-black/60 rounded-[30px] py-18 gap-4 flex flex-col justify-center items-center">
        <h1 className="text-[36px] font-[700] text-center">
          Discover, Learn & Play with SoundSellers
        </h1>
        <p className="max-w-[600px] text-center text-gray-200">
          Find your perfect instrument, learn from expert-led courses, and join
          a vibrant community of music lovers.
        </p>

        <div className="flex gap-4">
          <button className="px-5 py-2 border-2 border-[#A67C52] rounded-full text-[18px] bg-[#A67C52] hover:bg-transparent hover:text-[#A67C52] transition">
            Browse Instruments
          </button>
          <button className="px-5  py-2 border-2 border-[#A67C52] text-[#A67C52] rounded-full bg-transparent  hover:bg-[#A67C52] hover:text-white transition">
            Explore Courses
          </button>
        </div>
      </div>
    </div>
  );
};
