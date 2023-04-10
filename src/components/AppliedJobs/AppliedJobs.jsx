import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import JobTag from '../JobTag/JobTag';
import JobLocation from '../JobLocation/JobLocation';
import CompanyName from '../CompanyName/CompanyName';
import CardHeading from '../CardHeading/CardHeading';
import Salary from '../Salary/Salary';

const AppliedJobs = () => {
  return (
    <div>
      <div>
        <img src="here is image" alt="" />
      </div>

      <div>
        <CardHeading>Technical</CardHeading>
        <CompanyName>Google LLC</CompanyName>
        <div className="flex gap-2">
          <JobTag>Remote</JobTag>
          <JobTag>Fulltime</JobTag>
        </div>
        <JobLocation>Location</JobLocation>
        <Salary></Salary>
      </div>

      <div>
        <Link to="">
          <Button>View Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default AppliedJobs;
