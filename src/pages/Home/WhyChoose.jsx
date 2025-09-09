import React from "react";
import icon1 from "../../assets/icons/secure.png";
import icon2 from "../../assets/icons/doller.png";
import icon3 from "../../assets/icons/badge.png";

const categoryItem = [
  {
    name: "Secure Transactions",
    description:
      "Every purchase is protected with our buyer guarantee and secure payment processing.",
    image: icon1,
  },
  {
    name: "Best Prices",
    description:
      "Compare prices across sellers and get the best deals on quality instruments.",
    image: icon2,
  },
  {
    name: "Quality Guaranteed",
    description:
      "All instruments are inspected and verified for authenticity and condition.",
    image: icon3,
  },
];

export const WhyChoose = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="container mx-auto px-4 py-18 flex flex-col justify-center items-center">
        <h1 className="text-[36px] font-[700] text-center mb-4">
          Why Choose SoundSellers?
        </h1>
        <p className="text-[18px] text-[#4A5565] text-center mb-15">
          We're more than just a marketplace - we're your trusted partner in
          your musical journey
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-21">
          {categoryItem.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-3 items-center p-[24px] rounded-[14px]"
            >
              <img src={item.image} alt={item.name} />
              <h6 className="text-[20px] font-[500]">{item.name}</h6>
              <p className="text-[#6A7282] text-[16px] text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
