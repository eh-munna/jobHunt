import React from 'react';
import CardHeading from '../CardHeading/CardHeading';
import Button from '../Button/Button';
import JobTag from '../JobTag/JobTag';
import CompanyName from '../CompanyName/CompanyName';
import JobLocation from '../JobLocation/JobLocation';
import Salary from '../Salary/Salary';
import { Link } from 'react-router-dom';

const Jobs = ({ job }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    location,
    salary,
    remote_or_onsite,
    fulltime_or_parttime,
  } = job;
  return (
    <div className="rounded-lg border border-[#e8e8e8] p-7 md:p-9 space-y-2 md:space-y-4">
      <img src={company_logo} className="max-w-full" alt="" />
      <CardHeading>{job_title}</CardHeading>
      <CompanyName>{company_name}</CompanyName>
      <div className="flex gap-2">
        <JobTag>{remote_or_onsite}</JobTag>
        <JobTag>{fulltime_or_parttime}</JobTag>
      </div>
      <div className="flex gap-2">
        <JobLocation>{location}</JobLocation>
        <Salary>{salary}</Salary>
      </div>
      <div>
        <Button id={job}>
          <Link to="/statistics">View Details</Link>
        </Button>
      </div>
    </div>
  );
};

export default Jobs;
