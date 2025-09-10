import React from "react";
import users from "../../assets/icons/users.png";
import premium from "../../assets/icons/premium.png";
import right from "../../assets/icons/right.png";
import wrong from "../../assets/icons/wrong.png";

export const ChoosePlan = () => {
  return (
    <div className="bg-[#F6F2EE]">
      <div className="container mx-auto px-4 py-18 flex flex-col justify-center items-center">
        <h1 className="text-[36px] font-[700] text-center mb-4">
          Choose Your Seller Plan
        </h1>
        <p className="text-[18px] text-[#4A5565] text-center mb-15">
          Grow your business with the right tools. Start free and scale as you
          grow.
        </p>
        <div className="w-full md:flex justify-center space-y-5 md:space-y-0 gap-5">
          <div className="md:max-w-[439px] bg-[#FFFFFF] flex flex-col justify-center gap-3 items-center p-[33px] border-[#E5E7EB] border-[1px] rounded-[8px]">
            <div className="flex flex-col justify-between items-center gap-[13px]">
              <img src={users} alt={"user_icon"} />
              <h2 className="text-[24px] font-[400]">Free Sellers</h2>
              <p className="text-[16px] text-[#6B7280]">
                Perfect for getting started Sellers
              </p>
              <h1 className="text-[36px]">Free</h1>
            </div>
            <ul className="md:min-w-[372px] space-y-[15px] mt-10 pb-30">
              <li className="flex items-center gap-3 text-[14px]">
                <img src={right} alt="right-icon" />
                Up to 5 product listings
              </li>
              <li className="flex items-center gap-3 text-[14px]">
                <img src={right} alt="right-icon" />
                Profile name, profile picture, short bio
              </li>
              <li className="flex items-center gap-3 text-[14px]">
                <img src={right} alt="right-icon" />
                Default marketplace branding
              </li>
              <li className="flex items-center gap-3 text-[14px] text-[#6B7280]">
                <img src={wrong} alt="wrong-icon" />
                Analytics dashboard
              </li>
              <li className="flex items-center gap-3 text-[14px] text-[#6B7280]">
                <img src={wrong} alt="wrong-icon" />
                Storefront customization
              </li>
            </ul>
            <div className="w-full">
              <button className="cursor-pointer w-full py-[12px] text-[14px] rounded-[6px] border-[#E5E7EB] border-[1px]">
                Get Started Free
              </button>
            </div>
          </div>
          <div className="md:max-w-[439px] bg-[#FFFFFF] flex flex-col justify-center gap-3 items-center p-[33px] border-[#E5E7EB] border-[1px] rounded-[8px]">
            <div className="relative flex flex-col justify-between items-center gap-[13px]">
              <span
                className={`absolute flex justify-center end-0 items-center mr-[-77px] md:mr-[-133px] -m-[37px] px-[22px] py-[4px] text-[14px] text-white bg-[#17B26A]`}
              >
                10% Off
              </span>
              <img src={premium} alt={"user_icon"} />
              <h2 className="text-[24px] font-[400]">Premium Sellers</h2>
              <p className="text-[16px] text-[#6B7280]">For growing sellers</p>
              <h1 className="text-[36px]">
                $29
                <span className="text-[16px] text-[#666666] font-[400]">
                  /Month
                </span>
              </h1>
            </div>
            <ul className="md:min-w-[372px] space-y-[15px] mt-10 pb-10">
              <li className="flex items-center gap-3 text-[14px]">
                <img src={right} alt="right-icon" />
                Everything in Free +
              </li>
              <li className="flex items-center gap-3 text-[14px]">
                <img src={right} alt="right-icon" />
                Up to 50 product listings
              </li>
              <li className="flex items-center gap-3 text-[14px]">
                <img src={right} alt="right-icon" />
                Buyers can message the seller
              </li>
              <li className="flex items-center gap-3 text-[14px]">
                <img src={right} alt="right-icon" />
                Storefront banner
              </li>
              <li className="flex items-center gap-3 text-[14px]">
                <img src={right} alt="right-icon" />
                Analytics dashboard
              </li>
              <li className="flex items-center gap-3 text-[14px]">
                <img src={right} alt="right-icon" />
                Rent option with deposit handling
              </li>
              <li className="flex items-center gap-3 text-[14px]">
                <img src={right} alt="right-icon" />
                Boosted search visibility
              </li>
            </ul>
            <div className="w-full">
              <button className="cursor-pointer bg-[#A67C52] w-full py-[12px] rounded-[6px] border-[#E5E7EB] border-[1px] text-[14px] text-white">
                Start Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
