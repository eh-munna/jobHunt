import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
const NavBar = () => {
  return (
    <div className="container py-3 px-6 md:py-6 md:px-12 mx-auto">
      <div className="flex flex-col md:flex-row justify-between  items-center">
        <div className="z-20">
          <Link
            className="font-semibold md:font-extrabold text-xl md:text-2xl text-[#1A1919] font-['Manrope'] leading-10"
            to="/"
          >
            CareerHunt
          </Link>
        </div>
        <div className="z-20">
          <ul className="flex justify-between gap-4">
            <li>
              <Link
                className="ease-in duration-300 font-medium text-base text-[#757575] font-['Manrope'] leading-5 hover:text-[#7E90FE] hover:ease-in"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="ease-in duration-300 font-medium text-base text-[#757575] font-['Manrope'] leading-5 hover:text-[#7E90FE] hover:ease-in"
                to="/statistics"
              >
                Statistics
              </Link>
            </li>
            <li>
              <Link
                className="ease-in duration-300 font-medium text-base text-[#757575] font-['Manrope'] leading-5 hover:text-[#7E90FE] hover:ease-in"
                to="/applied-jobs"
              >
                Applied Jobs
              </Link>
            </li>
            <li>
              <Link
                className="ease-in duration-300 font-medium text-base text-[#757575] font-['Manrope'] leading-5 hover:text-[#7E90FE] hover:ease-in"
                to="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <Link to="/">
            <Button>Start Applying</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
