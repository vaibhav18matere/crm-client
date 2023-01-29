import React from "react";
import PropTypes from "prop-types";

const PasswordReset = ({
  handleOnChange,
  handleResetForm,
  formSwitcher,
  email,
}) => {
  return (
    <form autoComplete="off" onSubmit={handleResetForm}>
      <div className="flex justify-center items-center h-screen bg-indigo-400">
        <div className="w-96 p-6 bg-white shadow-lg rounded-md">
          <h1 className="text-2xl font-bold tracking-wide block text-center">
            Reset Password
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
              name="email"
              value={email}
              placeholder="enter your email ID"
              autoComplete="off"
              onChange={handleOnChange}
            />
          </div>
          <div className="mt-4">
            <button
              className="border-2 border-indigo-600 rounded-sm bg-indigo-600 w-full text-white py-1 hover:text-indigo-800 hover:bg-white"
              type="submit"
            >
              Reset Password
            </button>
          </div>
          <div className="flex align-middle justify-around mt-3">
            <a
              className="text-indigo-700 font-semibold"
              href="#!"
              onClick={() => formSwitcher("login")}
            >
              Back to login page
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PasswordReset;

PasswordReset.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleResetForm: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
