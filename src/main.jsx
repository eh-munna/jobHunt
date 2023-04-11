import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import JobDetails from './components/JobDetails/JobDetails';
import jobLoaders from './loaders/jobLoaders';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/jobsCategory.json'),
      },
      {
        path: 'job-details/:id',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch('/jobs.json'),
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs />,
        loader: jobLoaders,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
