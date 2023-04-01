import React from "react";
import SignUpFrom from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in.component";
import "./authentication.style.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpFrom />
    </div>
  );
};

export default Authentication;
