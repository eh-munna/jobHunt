import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
  const loadedJobs = useLoaderData();
  const { jobs } = loadedJobs;
  console.log(jobs);
  return (
    <div className="bg-[#f8f9ff]">
      <HomeBanner></HomeBanner>
    </div>
  );
};

export default Home;
