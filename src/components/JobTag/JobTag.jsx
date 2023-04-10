import React from 'react';

const JobTag = ({ children }) => {
  return (
    <p className="text-base md:text-xl font-semibold text-[#7E90FE] rounded-md border border-[#7E90FE] p-2">
      {children}
    </p>
  );
};

export default JobTag;
