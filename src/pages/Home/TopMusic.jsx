import React from "react";
import arrow from "../../assets/icons/up-right-arrow.png";
import location_icon from "../../assets/icons/location.png";
import star from "../../assets/icons/star.png";

const items = [
  {
    image: "https://i.ibb.co.com/b5rj7vqr/placeholder-svg.png",
    name: "Beginner Guitar Basics",
    description: "Sarah Johnson",
    location: "Los Angeles, CA",
    category: ["Classical", "Jazz", "Pop"],
    price: 45,
    itemfor: "Book Now",
    rating: 4.9,
  },
  {
    image: "https://i.ibb.co.com/fVZh11JX/placeholder-svg-1.png",
    name: "Saxophone Fundamentals",
    description: "James Carter",
    location: "New York, NY",
    category: ["Rock", "Blues", "Indie"],
    price: 50,
    itemfor: "Book Now",
    rating: 4.8,
  },
  {
    image: "https://i.ibb.co.com/67mSDwQk/placeholder-svg-2.png",
    name: "Violin Made Easy",
    description: "Emily Thompson",
    location: "Seattle, WA",
    category: ["Classical", "Folk", "World"],
    price: 55,
    itemfor: "Book Now",
    rating: 4.7,
  },
  {
    image: "https://i.ibb.co.com/Q38mYvBV/placeholder-svg-4.png",
    name: "Vocal Training",
    description: "Michael Anderson",
    location: "Austin, TX",
    category: ["Rock", "Metal", "Hip-Hop"],
    price: 40,
    itemfor: "Book Now",
    rating: 4.9,
  },
];

export const TopMusic = () => {
  return (
    <div className="container mx-auto px-4 pt-25 pb-30 flex flex-col justify-center">
      <h1 className="text-[36px] font-[700] mb-4">Top Music Teachers</h1>
      <div className="text-[18px] text-[#4A5565] flex justify-between mb-15">
        <p>Learn from the best instructors in your area</p>
        <button className="py-[6px] px-[16px] border-[1px] border-[#A67C52] text-[18px] text-[#A67C52] flex justify-center items-center rounded-full gap-1">
          See all <img src={arrow} alt="up-right-arrow" />
        </button>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="card bg-[#FFFFFF] border-2 border-[#E5E7EB] rounded-[14px]"
          >
            <span
              className={`flex justify-center items-center gap-2 absolute end-0 m-3 rounded-full px-[12px] py-[6px] text-[14px] font-[500] bg-[#F6F2EE]
              `}
            >
              <img src={star} alt="" />
              {item.rating}
            </span>
            <figure>
              <img
                className="w-[100%] rounded-t-[14px]"
                src={item.image}
                alt={item.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="text-[18px] font-[500]">{item.name}</h2>
              <p className="text-[14px] font-[400] text-[#8C8C8C]">
                {item.description}
              </p>
              <div className="flex items-center gap-1">
                <img src={location_icon} alt="location_icon" />
                <p className="text-[14px] text-[#6A7282]">{item.location}</p>
              </div>
              <div className="flex gap-3">
                {item?.category.map((c, i) => (
                  <div
                    className="bg-[#F5F5F5] text-center rounded-full px-[9px] py-[4px] text-[12px] font-[500]"
                    key={i}
                  >
                    {c}
                  </div>
                ))}
              </div>
              <hr className="text-[#F3F4F6]" />

              <div className="flex gap-2 items-center justify-between">
                <p className="text-[20px] font-[700]">
                  ${item.price}
                  <span className="text-[16px] text-[#666666] font-[400]">
                    /lesson
                  </span>
                </p>
                <button className="text-[18px] text-[#A67C52] flex gap-1 items-center py-[8px] rounded-full justify-center">
                  {item.itemfor} <img src={arrow} alt={"arrow icon"} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
