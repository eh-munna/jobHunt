import React from 'react';

const HomeHeading = ({ children }) => {
  return (
    <h2 className="capitalize text-[#1A1919] text-3xl md:text-4xl font-semibold">
      {children}
    </h2>
  );
};

export default HomeHeading;
