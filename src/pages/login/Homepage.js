import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Login from "./login";
import PasswordReset from "../reset-password/PasswordReset";
import { ToastContainer, toast } from "react-toastify";

const Homepage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

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
      return toast.warn("Please fill all the details!", {
        autoClose: 3000,
      });
    }
  };

  const handleResetForm = (e) => {
    e.preventDefault();
    if (!email) {
      return toast.warn("Please enter email ID!", {
        autoClose: 3000,
      });
    }
  };

  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };

  return (
    <>
      {formLoad === "login" && (
        <Login
          email={email}
          password={password}
          handleOnChange={handleOnChange}
          handleSubmitForm={handleSubmitForm}
          formSwitcher={formSwitcher}
        />
      )}
      {formLoad === "reset" && (
        <PasswordReset
          email={email}
          handleOnChange={handleOnChange}
          handleResetForm={handleResetForm}
          formSwitcher={formSwitcher}
        />
      )}
      <ToastContainer closeOnClick />
    </>
  );
};

export default Homepage;
