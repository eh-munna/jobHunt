import React, { Children } from 'react';

const Button = ({ children }) => {
  return (
    <button className="rounded-md p-2 md:p-4 text-[#ffffff] leading-4 font-bold text-lg bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100%">
      {children}
    </button>
  );
};

export default Button;
