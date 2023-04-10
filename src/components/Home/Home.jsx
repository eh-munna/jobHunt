import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeBanner from '../HomeBanner/HomeBanner';
import JobCategory from '../JobCategory/JobCategory';
import CategoryList from '../CategoryList/CategoryList';
import HomeHeading from '../HomeHeading/HomeHeading';
import HomeDesc from '../HomeDesc/HomeDesc';

const Home = () => {
  const loadedCategory = useLoaderData();
  const { categories } = loadedCategory;
  // const loadedJobs = useLoaderData();
  // const { jobs } = loadedJobs;
  // console.log(jobs);
  return (
    <div>
      <div className="bg-[#f8f9ff]">
        <HomeBanner></HomeBanner>
      </div>
      <div className="container mx-auto py-4 md:py-0 px-6 md:px-12">
        <JobCategory categories={categories}></JobCategory>
      </div>
    </div>
  );
};

export default Home;
