import React from 'react';
import CardHeading from '../CardHeading/CardHeading';
import CompanyName from '../CompanyName/CompanyName';
import Salary from '../Salary/Salary';
import JobLocation from '../JobLocation/JobLocation';
import JobTag from '../JobTag/JobTag';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const SavedJobs = ({ job }) => {
  const {
    id,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    salary,
    company_logo,
    location,
  } = job;

  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-4 md:py-0 px-6 md:px-12 grid grid-cols-1 my-8 md:my-16 gap-10">
      <div className="flex flex-col md:flex-row gap-10 text-center md:text-left items-center border border-[#E8E8E8] rounded-md p-4">
        <div className="bg-[#F4F4F4] p-8 md:p-16 rounded-md">
          <img className="mx-auto max-w-full" src={company_logo} alt="" />
        </div>
        <div className="grow space-y-3 md:space-y-5">
          <div className="space-y-2">
            <CardHeading>{job_title}</CardHeading>
            <CompanyName>{company_name}</CompanyName>
          </div>
          <div className="flex gap-2 justify-around items-center md:justify-normal">
            <JobTag>{remote_or_onsite}</JobTag>
            <JobTag>{fulltime_or_parttime}</JobTag>
          </div>
          <div className="flex gap-2 justify-around items-center md:justify-normal">
            <JobLocation>{location}</JobLocation>
            <Salary>{salary}</Salary>
          </div>
        </div>
        <div>
          <span onClick={() => navigate(`/job-details/${id}`)}>
            <Button>View Details</Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SavedJobs;
