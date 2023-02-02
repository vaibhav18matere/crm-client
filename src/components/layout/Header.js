import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const [navIconOpen, setNavIconOpen] = useState(false);

  const loggedOut = () => {
    navigate("/");
  };

  return (
    <>
      <nav className="p-5 bg-indigo-400 shadow md:flex md:items-center md:justify-between tracking-widest">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold hover:text-blue-700 cursor-pointer"
          >
            Falcon CRM
          </Link>
          <div
            onClick={() => setNavIconOpen(!navIconOpen)}
            className="text-3xl cursor-pointer md:hidden block mx-2"
          >
            <ion-icon name={navIconOpen ? "close" : "menu"}></ion-icon>
          </div>
        </div>
        <ul
          className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-indigo-400 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all opacity-100 ease-in duration-500 ${
            navIconOpen ? "top-30" : "top-[-450px]"
          } `}
        >
          <li className="mx-5 my-6 md:my-0">
            <Link
              to="/dashboard"
              className="text-xl tracking-wide font-bold hover:text-blue-700"
            >
              Dashboard
            </Link>
          </li>
          <li className="mx-5 my-6 md:my-0">
            <Link
              to="/tickets"
              className="text-xl tracking-wide font-bold hover:text-blue-700"
            >
              Tickets
            </Link>
          </li>
          <li className="mx-5 my-6 md:my-0">
            <Link
              to="/"
              className="text-xl tracking-wide font-bold hover:text-blue-700"
              onClick={loggedOut}
            >
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
