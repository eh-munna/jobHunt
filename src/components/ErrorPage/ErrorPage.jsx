import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const ErrorPage = () => {
  return (
    <div className="container mx-auto py-4 md:py-16 px-6 md:px-12">
      <div className="grid grid-cols-1 place-items-center">
        <div>
          <h2 className="font-bold text-2xl md:text-7xl text-orange-400">
            404
          </h2>
        </div>
        <div>
          <h3 className="font-semibold text-lg">
            You have come to to the wrong page
          </h3>
        </div>
        <div className="py-5">
          <Link to="/">
            <Button>Back to home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
