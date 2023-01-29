import React, { useState } from "react";
import Login from "./login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Homepage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!email || !password) {
      //alert("Fill all the details !");
      toast.warn("Please fill all the details!", {
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <Login
        email={email}
        password={password}
        handleOnChange={handleOnChange}
        handleSubmitForm={handleSubmitForm}
      />
      <ToastContainer closeOnClick />
    </>
  );
};

export default Homepage;
