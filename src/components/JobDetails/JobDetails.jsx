import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import vector from '../../images/Vector.png';
import vector1 from '../../images/Vector-1.png';
import { addToDb } from '../../utilities/fakedb';

const JobDetails = () => {
  const { jobs } = useLoaderData();
  const detailsId = useParams();
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const targetJob = jobs.find((job) => job.id == detailsId.id);
    setDetails(targetJob);
  }, [detailsId]);
  const {
    id,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    job_title,
    phone,
    email,
    salary,
    address,
  } = details;

  const addHandler = (id) => {
    addToDb(id);
  };

  return (
    <div>
      <div className="bg-[#f8f9ff] py-20 relative">
        <h2 className="text-center text-[#1A1919] text-3xl font-semibold">
          Job Details
        </h2>
        <img className="absolute bottom-0" src={vector} alt="" />
      </div>
      <img className="absolute right-0 top-0" src={vector1} alt="" />
      <div className="container mx-auto py-4 md:py-0 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 my-8 md:my-16 gap-10">
        <div className="md:col-span-2 space-y-6">
          <div className="leading-7">
            <h3 className="leading-7 text-[#1A1919] font-semibold">
              Job Description:{' '}
              <span className="font-medium text-[#757575]">
                {job_description}
              </span>
            </h3>
            {/* <h4>{email}</h4> */}
          </div>
          <div>
            <h3 className="leading-7 text-[#1A1919] font-semibold">
              Job Responsibility:{' '}
              <span className="font-medium text-[#757575]">
                {job_responsibility}
              </span>
            </h3>
          </div>
          <div className="space-y-4">
            <h3 className="leading-7 text-[#1A1919] font-semibold">
              Educational Requirements:
            </h3>
            <p className="font-medium text-[#757575]">
              {educational_requirements}
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="leading-7 text-[#1A1919] font-semibold">
              Experiences:
            </h3>
            <p className="font-medium text-[#757575]">{experiences}</p>
          </div>
        </div>
        <div className=" md:col-span-1 ">
          <div className="p-4 md:p-7 mb-4 rounded-lg bg-[#edeeff]">
            <div className="mb-5">
              <h5 className="text-[#1A1919] text-lg capitalize font-semibold">
                job details
              </h5>
            </div>
            <hr className="border-[#d8cbff]" />
            <div className="space-y-3 py-4">
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
                  Job Title :{' '}
                  <span className="text-[#757575]">{job_title}</span>
                </h5>
              </div>
            </div>
            <div className="mb-5">
              <h5 className="text-[#1A1919] text-lg capitalize font-semibold">
                Contact Information
              </h5>
            </div>
            <hr className="border-[#d8cbff]" />
            <div className="space-y-3 py-4">
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
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </span>
                  Phone : <span className="text-[#757575]">{phone}</span>
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
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  Email : <span className="text-[#757575]">{email}</span>
                </h5>
              </div>
              <div>
                <h5 className="text-[#474747] text-base md:text-lg font-semibold flex items-center gap-1">
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
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </span>
                  <span className="">Address :</span>
                  <span className="text-[#757575]">{address}</span>
                </h5>
              </div>
            </div>
          </div>
          <button
            onClick={() => addHandler(id)}
            className="w-full capitalize rounded-md p-2 md:p-4 text-[#ffffff] leading-4 font-bold text-lg bg-gradient-to-r from-[#7E90FE] from-0% to-[#9873FF] to-100%"
          >
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
