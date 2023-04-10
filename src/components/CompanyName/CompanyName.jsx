import React from 'react';

const CompanyName = ({ children }) => {
  return (
    <h5 className="text-[#757575] text-lg md:text-xl font-semibold">
      {children}
    </h5>
  );
};

export default CompanyName;
