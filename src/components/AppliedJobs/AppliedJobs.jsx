import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SavedJobs from '../SavedJobs/SavedJobs';

const AppliedJobs = () => {
  const storedJobs = useLoaderData();

  return (
    <div>
      {storedJobs.map((job) => (
        <SavedJobs key={job.id} job={job}></SavedJobs>
      ))}
    </div>
  );
};

export default AppliedJobs;
