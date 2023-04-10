import React, { useState } from 'react';
import HomeHeading from '../HomeHeading/HomeHeading';
import HomeDesc from '../HomeDesc/HomeDesc';
import Jobs from '../Jobs/Jobs';
import Button from '../Button/Button';

const FeaturedJobs = ({ jobs }) => {
  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(true);
  };
  return (
    <div className="mb-16">
      <div className="pb-6 md:pb-10 text-center  space-y-2 md:space-y-5">
        <HomeHeading>Featured Jobs</HomeHeading>
        <HomeDesc>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </HomeDesc>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
        {jobs.slice(0, showAll ? 6 : 4).map((job) => (
          <Jobs key={job.id} job={job}></Jobs>
        ))}
      </div>
      <div className="mt-10 text-center">
        <span onClick={handleShowAll}>
          <Button>Show all jobs</Button>
        </span>
      </div>
    </div>
  );
};

export default FeaturedJobs;
