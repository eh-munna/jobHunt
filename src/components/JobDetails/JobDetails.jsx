import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Salary from '../Salary/Salary';

const JobDetails = () => {
  const { jobs } = useLoaderData();
  const da = useParams();
  console.log(da);
  const [details, setDetails] = useState({});
  useEffect(() => {
    // fetch('/jobs.json')
    //   .then((res) => res.json())
    //   .then((data) => setDetails(data));
    const targetJob = jobs.find((job) => job.id == da.id);
    setDetails(targetJob);
  }, []);
  const {
    company_name,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    job_title,
    contact_information,
    salary,
    location,
  } = details;
  return (
    <div className="container mx-auto py-4 md:py-0 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3">
      <div className="md:col-span-2">
        <div className="leading-7">
          <h3 className="leading-7 text-[#1A1919] font-semibold">
            Job Description:{' '}
            <span className="font-normal">{job_description}</span>
          </h3>
          {/* <h4>{email}</h4> */}
        </div>
        <div>
          <h3 className="leading-7 text-[#1A1919] font-semibold">
            Job Responsibility:{' '}
            <span className="font-normal">{job_responsibility}</span>
          </h3>
        </div>
        <div>
          <h3 className="leading-7 text-[#1A1919] font-semibold">
            Educational Requirements:
          </h3>
          <p className="font-normal">{educational_requirements}</p>
        </div>
        <div>
          <h3 className="leading-7 text-[#1A1919] font-semibold">
            Experiences:
          </h3>
          <p className="font-normal">{experiences}</p>
        </div>
      </div>
      <div className="p-7 rounded-lg md:col-span-1 bg-[#edeeff]">
        <div>
          <h5 className="text-[#1A1919] text-lg capitalize font-semibold">
            job details
          </h5>
          <hr />
        </div>
        <div>
          <h5 className="text-[#474747] text-base md:text-lg font-semibold inline-flex items-center gap-2">
            <span className="text-[#7E90FE]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            Salary :{' '}
            <span className="text-[#757575]">{salary} (Per Month)</span>
          </h5>
        </div>
        <div>
          <h5 className="text-[#474747] text-base md:text-lg font-semibold inline-flex items-center gap-2">
            <span className="text-[#7E90FE]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
            </span>
            Job Title : <span className="text-[#757575]">{job_title}</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
