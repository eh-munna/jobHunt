import React from 'react';
import HomeHeading from '../HomeHeading/HomeHeading';
import HomeDesc from '../HomeDesc/HomeDesc';
import Jobs from '../Jobs/Jobs';

const FeaturedJobs = ({ jobs }) => {
  return (
    <div>
      <div className="pb-6 md:pb-10 text-center  space-y-2 md:space-y-5">
        <HomeHeading>Featured Jobs</HomeHeading>
        <HomeDesc>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </HomeDesc>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
        {jobs.map((job) => (
          <Jobs key={job.id} job={job}></Jobs>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
