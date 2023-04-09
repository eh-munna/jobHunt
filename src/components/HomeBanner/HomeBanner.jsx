import React from 'react';
import Button from '../Button/Button';
import bannerPic from '../../../src/images/bannerpic.png';

const HomeBanner = () => {
  return (
    <div className="container mx-auto py-4 md:py-0 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-12">
      <div className="order-2 md:order-1 space-y-3 md:space-y-8 md:py-10">
        <h1 className="capitalize text-[#1A1919] text-3xl md:text-7xl">
          One step <br /> Closer To Your
          <br />
          <span className="text-[#7E90FE]">Dream Job</span>
        </h1>
        <p className="text[#757575] font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <Button>Get Started</Button>
      </div>
      <div className="pb-0 order-1 md:order-2 md:self-end">
        <img className="max-w-full" src={bannerPic} alt="" />
      </div>
    </div>
  );
};

export default HomeBanner;
