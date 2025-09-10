import React from "react";
import icon1 from "../../assets/icons/browse.png";
import icon2 from "../../assets/icons/connect.png";
import icon3 from "../../assets/icons/buy.png";
import icon4 from "../../assets/icons/music.png";

const categoryItem = [
  {
    name: "Browse & Discover",
    description:
      "Search thousands of instruments, equipment, and music teachers in your area or online.",
    image: icon1,
  },
  {
    name: "Connect & Chat",
    description:
      "Message sellers directly, ask questions, and negotiate prices in our secure chat system.",
    image: icon2,
  },
  {
    name: "Buy or Rent",
    description:
      "Purchase outright or rent instruments with flexible terms. All transactions are protected.",
    image: icon3,
  },
  {
    name: "Make Music",
    description:
      "Start playing, learning, and creating music with your new gear or lessons.",
    image: icon4,
  },
];

export const HowItWorks = () => {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col justify-center items-center">
      <h1 className="text-[36px] font-[700] text-center mb-4">How It Works</h1>
      <p className="max-w-[617px] text-[18px] text-[#4A5565] text-center mb-16">
        Getting started with SoundSellers is simple. Follow these easy steps to
        find your perfect instrument or teacher.
      </p>

      <div className="relative w-full flex flex-col md:flex-row justify-between items-center gap-32">
        <div className="hidden md:block absolute top-11 left-0 right-0 h-[4px] bg-gray-200 z-0 w-[80%] mx-auto"></div>

        {categoryItem.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center items-center text-center z-10 md:w-1/4 px-4"
          >
            <div className="relative flex items-center justify-center rounded-full bg-white shadow-md border border-gray-200 mb-4">
              <img src={item.image} alt={item.name} />
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#A67C52] text-white text-xs flex items-center justify-center">
                {index + 1}
              </span>
            </div>

            <h6 className="text-[20px] font-[600] mb-2">{item.name}</h6>

            <p className="text-[#6A7282] text-[16px]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
