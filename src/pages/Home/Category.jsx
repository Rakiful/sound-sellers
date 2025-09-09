import React from "react";
import icon1 from "../../assets/icons/guiter-icon.png";
import icon2 from "../../assets/icons/Keyboards-icon.png";
import icon3 from "../../assets/icons/Drums-icon.png";
import icon4 from "../../assets/icons/Audio-Equipment-icon.png";
import icon5 from "../../assets/icons/Microphones-icon.png";
import icon6 from "../../assets/icons/Other-Instruments-icon.png";

const categoryItem = [
  {
    name: "Guitars",
    items: "12,500",
    image: icon1,
  },
  {
    name: "Keyboards",
    items: "8,200",
    image: icon2,
  },
  {
    name: "Drums",
    items: "6,800",
    image: icon3,
  },
  {
    name: "Audio Equipment",
    items: "15,300",
    image: icon4,
  },
  {
    name: "Microphones",
    items: "4,100",
    image: icon5,
  },
  {
    name: "Others",
    items: "3,200",
    image: icon6,
  },
];

export const Category = () => {
  return (
    <div className="container mx-auto px-4 pt-30 pb-6 flex flex-col justify-center items-center">
      <h1 className="text-[36px] font-[700] text-center mb-4">
        Shop by Category
      </h1>
      <p className="max-w-[532px] text-[18px] text-[#4A5565] text-center mb-15">
        Discover thousands of musical instruments and equipment from trusted
        sellers worldwide
      </p>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categoryItem.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center gap-2 items-center p-[25px] border-[#E5E7EB] border-[1px] rounded-[14px]"
          >
            <img src={item.image} alt={item.name} />
            <h6 className="text-[20px] font-[500]">{item.name}</h6>
            <p className="text-[#6A7282] text-[16px]">{item.items}+ items</p>
          </div>
        ))}
      </div>
    </div>
  );
};
