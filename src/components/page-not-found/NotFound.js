import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 3000);
  });

  return (
    <>
      <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-bold text-7xl dark:text-gray-600">
              Error 404
            </h2>
            <p className="text-xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
          </div>
          <Link
            rel="noopener noreferrer"
            to="/dashboard"
            className="px-8 my-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
