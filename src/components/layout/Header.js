import React, { useState } from "react";

const Header = () => {
  const [navIconOpen, setNavIconOpen] = useState(false);
  return (
    <>
      <nav className="p-5 bg-indigo-400 shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold cursor-pointer">Falcon CRM</span>
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
            <a href="#!" className="text-xl hover:text-blue-700">
              Dashboard
            </a>
          </li>
          <li className="mx-5 my-6 md:my-0">
            <a href="#!" className="text-xl hover:text-blue-700">
              Tickets
            </a>
          </li>
          <li className="mx-5 my-6 md:my-0">
            <a href="#!" className="text-xl hover:text-blue-700">
              Layout
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
