import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SavedJobs from '../SavedJobs/SavedJobs';
import vector from '../../images/Vector.png';
import vector1 from '../../images/Vector-1.png';
import Button from '../Button/Button';

const AppliedJobs = () => {
  const storedJobs = useLoaderData();
  const [allJobs, setAllJobs] = useState(storedJobs);
  // console.log(allJobs);
  // const [isFilter, setIsFilter] = useState(false);
  const [remote, setRemote] = useState([]);
  const [onsite, setOnsite] = useState([]);

  // filter remote job

  useEffect(() => {
    const remoteJob = storedJobs.filter(
      (job) => job.remote_or_onsite == 'Remote'
    );
    setRemote(remoteJob);
  }, [allJobs]);

  const remoteData = () => {
    // setIsFilter(true);
    setAllJobs(remote);
  };

  // filter onsite job

  useEffect(() => {
    const onsiteJob = storedJobs.filter(
      (job) => job.remote_or_onsite == 'Onsite'
    );
    setOnsite(onsiteJob);
  }, [allJobs]);

  const onsiteData = () => {
    // setIsFilter(true);
    setAllJobs(onsite);
  };

  // console.log(remote);

  return (
    <div>
      <div className="bg-[#f8f9ff] py-20 relative">
        <h2 className="text-center text-[#1A1919] text-3xl font-semibold">
          Applied Jobs
        </h2>
        <img className="absolute bottom-0" src={vector} alt="" />
      </div>
      <img className="absolute right-0 top-0" src={vector1} alt="" />
      <div className="container mx-auto p2-4 md:py-0 px-6 md:px-12 my-4 md:my-16 gap-10">
        <div className="flex justify-center md:justify-end gap-2">
          <span onClick={remoteData}>
            <Button>Show Remote</Button>
          </span>
          <span onClick={onsiteData}>
            <Button>Show Onsite</Button>
          </span>
        </div>
      </div>
      <div>
        {/* {isFilter
          ? remote.map((job) => <SavedJobs key={job.id} job={job}></SavedJobs>)
          : allJobs.map((job) => (
              <SavedJobs key={job.id} job={job}></SavedJobs>
            ))} */}

        {/* {isFilter
          ? onsite.map((job) => <SavedJobs key={job.id} job={job}></SavedJobs>)
          : allJobs.map((job) => (
              <SavedJobs key={job.id} job={job}></SavedJobs>
            ))} */}
        {allJobs.map((job) => (
          <SavedJobs key={job.id} job={job}></SavedJobs>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
