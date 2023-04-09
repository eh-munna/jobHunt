import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const App = () => {
  const loadedJobs = useLoaderData();
  const { jobs } = loadedJobs;
  console.log(jobs);

  return <div>{}</div>;
};

export default App;
