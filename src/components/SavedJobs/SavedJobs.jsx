import React from 'react';

const SavedJobs = ({ job }) => {
  const { job_title } = job;
  return <div>{job_title}</div>;
};

export default SavedJobs;
