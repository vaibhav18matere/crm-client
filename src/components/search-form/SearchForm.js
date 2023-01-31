import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ searchOnchange, str }) => {
  return (
    <>
      <form>
        <div className="form-group mb-6">
          <label className="tracking-wide font-medium ml-6 mx-3">
            Search Ticket:
          </label>
          <input
            type="text"
            placeholder="search for ticket"
            name="searchStr"
            value={str}
            onChange={searchOnchange}
            className="form-control px-3 py-1.5 my-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </div>
      </form>
    </>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  searchOnchange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired,
};
