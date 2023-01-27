import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-400">
      <div className="w-96 p-6 bg-white shadow-lg rounded-md">
        <h1 className="text-2xl font-bold tracking-wide block text-center">
          Login
        </h1>
        <hr className="m-4" />
        <div className="mt-4">
          <label className="block text-base mb-2" htmlFor="username">
            Email ID :
          </label>
          <input
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            id="username"
            type="email"
            placeholder="enter your email ID"
          />
        </div>
        <div className="mt-4">
          <label className="block text-base" htmlFor="password">
            Password :
          </label>
          <input
            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            id="password"
            type="password"
            placeholder="enter your password"
          />
        </div>
        <div className="flex align-middle justify-around mt-3">
          <div>
            <input type="checkbox" />
            <label className="px-1">Remember me</label>
          </div>
          <div>
            <a className="text-indigo-700 font-semibold" href="/">
              Forget password
            </a>
          </div>
        </div>
        <div className="mt-4">
          <button
            className="border-2 border-indigo-600 rounded-sm bg-indigo-600 w-full text-white py-1 hover:text-indigo-800 hover:bg-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
