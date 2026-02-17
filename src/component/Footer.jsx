import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <div id="footer" className="max-h-3xl w-full p-5 bg-[#0992C2]">
        <div className="flex flex-col justify-center items-center gap-4 md:flex md:flex-row md:justify-between md:items-start md:gap-6 lg:mx-5 lg:my-5">
          <div>
            <img
              className="w-12 h-12 my-3 lg:w-18 lg:h-18"
              src="./public/Logo.jpg"
              alt="Footer_logo"
            />
          </div>
          <div className="my-3 flex flex-col justify-center gap-4 md:gap-8 md:items-start">
            <p className="text-[#ACBAC4] font-bold text-xl md:text-lg">
              Find us in social media
            </p>
            <ul className="flex items-center justify-center gap-4">
              <li>
                <a
                  href="#"
                  className="border border-[#ACBAC4]-solid rounded-full p-1"
                >
                  <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border border-[#ACBAC4]-solid rounded-full p-1"
                >
                  <FontAwesomeIcon icon="fa-brands fa-facebook" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border border-[#ACBAC4]-solid rounded-full p-1"
                >
                  <FontAwesomeIcon icon="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="border border-[#ACBAC4]-solid rounded-full p-1"
                >
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <div className="my-3 flex flex-col gap-3 items-center md:items-start md:gap-8">
            <p className="text-[#ACBAC4] font-bold text-xl md:text-lg">COMMUNITY</p>
            <ul className="flex flex-col gap-3 justify-center items-center md:items-start">
              <li>
                <a href="#" className="text-[#ACBAC4] text-lg md:text-md">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ACBAC4] text-lg md:text-md">
                  Coummunity
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ACBAC4] text-lg md:text-md">
                  Ideas
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ACBAC4] text-lg md:text-md">
                  Developers
                </a>
              </li>
            </ul>
          </div>
          <div className="my-3 flex flex-col gap-3 items-center md:items-start md:gap-8">
            <p className="text-[#ACBAC4] font-bold text-xl md:text-lg">COMPANY</p>
            <ul className="flex flex-col gap-3 justify-center items-center md:items-start">
              <li>
                <a href="#" className="text-[#ACBAC4] text-lg md:text-md">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ACBAC4] text-lg md:text-md">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ACBAC4] text-lg md:text-md">
                  Where to Buy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ACBAC4] text-lg md:text-md">
                  Reseller
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ACBAC4] text-lg md:text-md">
                  Influencers
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ACBAC4] text-lg md:text-md">
                  Affillates
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ACBAC4] text-lg md:text-md">
                  Media
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ACBAC4] text-lg md:text-md">
                  Reseller
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ACBAC4] text-lg md:text-md">
                  Contacts & Imprint
                </a>
              </li>
            </ul>
          </div>
          <div className="my-3 flex flex-col gap-3 items-center md:items-start md:gap-8">
            <p className="text-[#ACBAC4] font-bold text-xl md:text-lg">USEFUL LINKS</p>
            <ul className="flex flex-col gap-3 justify-center items-center md:items-start">
              <li>
                <a href="#" className="text-[#ACBAC4] text-lg md:text-md">
                  Warrenty
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ACBAC4] text-lg md:text-md">
                  Product Declarations
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ACBAC4] text-lg md:text-md">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ACBAC4] text-lg md:text-md">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ACBAC4] text-lg md:text-md">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#ACBAC4] text-lg md:text-md">
                  Cookie Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
