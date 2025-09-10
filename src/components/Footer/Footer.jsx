import React from "react";
import logo from "../../assets/img/icon.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaRegCreditCard, FaTruck } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-[#A8A29E] pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-3">
          <div className="flex -ml-20 justify-center items-center gap-2 text-[32px] font-[700] ">
            <img src={logo} alt="logo" />
            <h1 className="text-white">SoundSellers</h1>
          </div>
          <p className="text-sm leading-6 mb-6 max-w-[300px]">
            The premier marketplace for musical instruments and equipment.
            Connect with musicians, find your perfect gear, and grow your
            musical journey.
          </p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Marketplace</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Guitars
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Keyboards
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Drums
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Audio Equipment
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Sell Your Gear
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ’s
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-sm mb-4">
            Get the latest deals and music news delivered to your inbox.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-white text-black border border-gray-600 focus:outline-none"
            />
            <button className="ml-2 px-4 py-2 bg-[#A87B4F] text-white rounded-md hover:bg-[#91683f] transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 pt-6 border-t border[#A8A29E] flex flex-col md:flex-row items-center justify-between text-sm">
        <div className="flex items-center gap-6 mb-4 md:mb-0">
          <span className="flex items-center gap-2">
            <FaRegCreditCard /> Secure Payments
          </span>
          <span className="flex items-center gap-2">
            <FaTruck /> Fast Shipping
          </span>
        </div>
        <p>© 2024 SoundSellers. All rights reserved.</p>
        <div className="flex gap-4">
          <span>stripe</span>
          <span>PayPal</span>
        </div>
      </div>
    </footer>
  );
};
