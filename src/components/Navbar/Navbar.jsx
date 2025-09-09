import React from "react";
import logo from "../../assets/img/icon.png";
import wishlist from "../../assets/icons/wishlist.png";
import cart from "../../assets/icons/cart.png";
import user from "../../assets/icons/user.png";
import down_arrow from "../../assets/icons/down_arrow.png";

export const Navbar = () => {
  const links = (
    <>
      <li>
        <details>
          <summary>Marketplace</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Studio</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div className="container mx-auto navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="text-[18px] font-[400] menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex ml-4 md:ml-0 justify-center items-center gap-2 text-[32px] font-[700] text-[#454545]">
          <img src={logo} alt="logo" />
          <h1>SoundSellers</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="text-[18px] font-[400] menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="hidden md:navbar-end gap-5">
        <div className="indicator">
          <div>
            <img src={cart} alt="cart_icon" />
          </div>
          <span className="indicator-item border-2 bg-white border-[#A67C52] w-5 h-5 rounded-full flex items-center justify-center text-[14px] text-[#A67C52] font-[400">
            2
          </span>
        </div>
        <div className="indicator">
          <div>
            <img src={wishlist} alt="wishlist_icon" />
          </div>
          <span className="indicator-item border-2 bg-white border-[#A67C52] w-5 h-5 rounded-full flex items-center justify-center text-[14px] text-[#A67C52] font-[400">
            3
          </span>
        </div>
        <div className="w-[76px] h-[40px] flex justify-center items-center bg-[#F6F2EE] rounded-full gap-2">
          <img src={user} alt="user_icon" />
          <img src={down_arrow} alt="down_arrow_icon" />
        </div>
        <div>
          <button className="cursor-pointer bg-[#A67C52] py-[8px] px-[16px] w-[149px] h-[44px] rounded-full text-[18px] text-white font-[400]">
            Sell your gear
          </button>
        </div>
      </div>
    </div>
  );
};
