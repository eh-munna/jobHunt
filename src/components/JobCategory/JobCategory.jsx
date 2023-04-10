import React from 'react';
import CategoryList from '../CategoryList/CategoryList';
import HomeHeading from '../HomeHeading/HomeHeading';
import HomeDesc from '../HomeDesc/HomeDesc';

const JobCategory = ({ categories }) => {
  return (
    <div className="py-12 md:py-28">
      <div className="pb-6 md:pb-10 text-center  space-y-2 md:space-y-5">
        <HomeHeading>Job Category List</HomeHeading>
        <HomeDesc>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </HomeDesc>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-between">
        {categories.map((category) => (
          <CategoryList key={category.id} category={category}></CategoryList>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
