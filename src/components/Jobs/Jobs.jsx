import React from 'react';

const Jobs = ({ job }) => {
  const { job_title } = job;
  console.log(job);
  return (
    <div>
      <h2>{job_title}</h2>
    </div>
  );
};

export default Jobs;
