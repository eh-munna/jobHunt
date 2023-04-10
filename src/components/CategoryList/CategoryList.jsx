import React from 'react';

const CategoryList = ({ category }) => {
  const { id, category_logo, category_name, job_count } = category;
  return (
    <div className="bg-[#f8f9ff] p-4 md:p-9 rounded-lg text-center md:text-left space-y-2 md:space-y-4">
      <img
        className="mx-auto md:mx-0 bg-[#edeeff] p-4 rounded-lg"
        src={category_logo}
        alt=""
      />
      <h3 className="text-[#474747] font-medium text-lg">{category_name}</h3>
      <p className="text-[#A3A3A3]">{job_count}</p>
    </div>
  );
};

export default CategoryList;
