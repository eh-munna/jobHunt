import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const loadedJobs = useLoaderData();
  const { jobs } = loadedJobs;
  console.log(jobs);
  return (
    <div>
      <h3 className="font-bold">Home</h3>
    </div>
  );
};

export default Home;
