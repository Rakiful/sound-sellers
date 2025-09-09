import React from "react";
import arrow from "../../assets/icons/up-right-arrow.png";
import location_icon from "../../assets/icons/location.png";
import transparent_wishlist from "../../assets/icons/transparent-wishlist.png";
import white_cart from "../../assets/icons/white-cart.png";
import callender from "../../assets/icons/callender.png";
import verified from "../../assets/icons/verified.png";

const items = [
  {
    image: "https://i.ibb.co.com/nq95frVf/Frame-11.png",
    name: "Fender Player Stratocaster",
    location: "Los Angeles, CA",
    price: 899,
    shop: true,
    offerType: "Great Deal",
    itemfor: "Buy Now",
  },
  {
    image: "https://i.ibb.co.com/xSbsChgJ/Frame-11-1.png",
    name: "Gibson Les Paul Standard",
    location: "Los Angeles, CA",
    price: 50,
    shop: false,
    offerType: "Hot Deal",
    itemfor: "Rent Now",
  },
  {
    image: "https://i.ibb.co.com/N6PD0NHQ/Frame-11-2.png",
    name: "Ibanez RG550",
    location: "Los Angeles, CA",
    price: 899,
    shop: true,
    offerType: "Fair Price",
    itemfor: "Buy Now",
  },
  {
    image: "https://i.ibb.co.com/XrQzT3HG/Frame-11-3.png",
    name: "Yamaha Pacifica 112V",
    location: "Los Angeles, CA",
    price: 50,
    shop: false,
    offerType: "Hot Deal",
    itemfor: "Rent Now",
  },
  {
    image: "https://i.ibb.co.com/d3GGRB2/Frame-11-4.png",
    name: "PRS SE Custom 24",
    location: "Los Angeles, CA",
    price: 799,
    shop: false,
    offerType: "Fair Price",
    itemfor: "Buy Now",
  },
  {
    image: "https://i.ibb.co.com/LXTBwv32/Frame-11-5.png",
    name: "Fender Jazzmaster",
    location: "Los Angeles, CA",
    price: 60,
    shop: false,
    offerType: "Fair Price",
    itemfor: "Rent Now",
  },
  {
    image: "https://i.ibb.co.com/21LK7kf7/Frame-11-6.png",
    name: "Epiphone Les Paul Studio",
    location: "Los Angeles, CA",
    price: 100,
    shop: true,
    offerType: "Great Deal",
    itemfor: "Rent Now",
  },
  {
    image: "https://i.ibb.co.com/99zf3BPn/Frame-11-7.png",
    name: "Jackson Dinky DK2",
    location: "Los Angeles, CA",
    price: 799,
    shop: true,
    offerType: "Fair Price",
    itemfor: "Buy Now",
  },
];

export const TrendingSection = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="container mx-auto px-4 py-18 bg-[#F9FAFB] flex flex-col justify-center">
        <h1 className="text-[36px] font-[700] mb-4">Trending Now</h1>
        <div className="text-[18px] text-[#4A5565] flex justify-between mb-15">
          <p>Hot deals that musicians are loving</p>
          <button className="py-[6px] px-[16px] border-[1px] border-[#A67C52] text-[18px] text-[#A67C52] flex justify-center items-center rounded-full gap-1">
            See all <img src={arrow} alt="up-right-arrow" />
          </button>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="card bg-[#FFFFFF] border-2 border-[#E5E7EB] rounded-[14px]">
              {item.shop && (
                <span
                  className={`flex gap-1 justify-center items-center absolute m-3 rounded-full px-[12px] py-[6px] text-[14px] text-[#A67C52] bg-[#F6F2EE]`}
                >
                  Shop <img src={verified} alt="verified_icon" />
                </span>
              )}
              <span
                className={`absolute end-0 m-3 rounded-full px-[12px] py-[6px] text-[14px] text-white
               ${item.offerType === "Fair Price" && "bg-[#2B7FFF]"} 
              ${item.offerType === "Great Deal" && "bg-[#17B26A]"}
              ${item.offerType === "Hot Deal" && "bg-[#ff2b2b]"}
              `}
              >
                {item.offerType}
              </span>
              <figure>
                <img className="w-[100%] rounded-t-[14px]" src={item.image} alt={item.name} />
              </figure>
              <div className="card-body">
                <h2 className="text-[18px] font-[500]">{item.name}</h2>
                <div className="flex items-center gap-1">
                  <img src={location_icon} alt="location_icon" />
                  <p className="text-[14px] text-[#6A7282]">{item.location}</p>
                </div>
                <p className="text-[20px] font-[700]">
                  ${item.price}
                  {item.itemfor === "Rent Now" && (
                    <span className="text-[16px] text-[#666666] font-[400]">
                      /Day
                    </span>
                  )}
                </p>
                <div className="flex gap-2">
                  <button className="w-3/4 bg-[#A67C52] text-white text-[18px] flex gap-3 items-center py-[8px] rounded-full justify-center">
                    <img
                      src={item.itemfor === "Buy Now" ? white_cart : callender}
                      alt={
                        item.itemfor === "Buy Now"
                          ? "cart_icon"
                          : "callender_icon"
                      }
                    />
                    {item.itemfor}
                  </button>
                  <div className="w-1/4 flex justify-center items-center">
                    <img
                      src={transparent_wishlist}
                      alt="transparent-wishlist"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
