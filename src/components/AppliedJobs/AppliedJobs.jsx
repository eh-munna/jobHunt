import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SavedJobs from '../SavedJobs/SavedJobs';
import vector from '../../images/Vector.png';
import vector1 from '../../images/Vector-1.png';

const AppliedJobs = () => {
  const storedJobs = useLoaderData();

  return (
    <div>
      <div className="bg-[#f8f9ff] py-20 relative">
        <h2 className="text-center text-[#1A1919] text-3xl font-semibold">
          Applied Jobs
        </h2>
        <img className="absolute bottom-0" src={vector} alt="" />
      </div>
      <img className="absolute right-0 top-0" src={vector1} alt="" />
      {storedJobs.map((job) => (
        <SavedJobs key={job.id} job={job}></SavedJobs>
      ))}
    </div>
  );
};

export default AppliedJobs;
