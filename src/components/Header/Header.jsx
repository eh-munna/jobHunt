import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Link
          className="font-semibold md:font-extrabold text-xl md:text-2xl text-[#1A1919] font-['Manrope'] leading-10"
          to="/"
        >
          CareerHunt
        </Link>
      </div>
      <div>
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
      <div>
        <Link to="/">
          <button className="rounded-md p-2 md:p-4 text-[#ffffff] leading-4 font-bold text-lg bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100%">
            Start Applying
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
