import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeBanner from '../HomeBanner/HomeBanner';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
  const loadedCategory = useLoaderData();
  const { categories } = loadedCategory;
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch('jobs.json')
      .then((res) => res.json())
      .then((data) => setJobs(data.jobs));
  }, []);
  return (
    <div>
      <div className="bg-[#f8f9ff]">
        <HomeBanner></HomeBanner>
      </div>
      <div className="container mx-auto py-4 md:py-0 px-6 md:px-12">
        <JobCategory categories={categories}></JobCategory>
        <FeaturedJobs jobs={jobs}></FeaturedJobs>
      </div>
    </div>
  );
};

export default Home;
