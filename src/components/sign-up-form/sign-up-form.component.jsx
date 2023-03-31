import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.style.scss";

const SignUpFrom = () => {
  const [formField, setFormField] = useState({
    displayName: "",
    email: "",
    password: "",
    conformPassword: "",
  });
  const { displayName, email, password, conformPassword } = formField;

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormField((prevField) => ({ ...prevField, [name]: value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (password !== conformPassword) {
      alert("Password do not match!");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      setFormField({
        displayName: "",
        email: "",
        password: "",
        conformPassword: "",
      });
    } catch (err) {
      if (err.code === "auth/email-already-in-use")
        alert("Cannot create account, email already in use");
      else if (err.code === "auth/weak-password") alert("Password is too week");
      else console.error("user creation error", err);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account ?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          onChange={handelChange}
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
        />

        <FormInput
          onChange={handelChange}
          label="Email"
          type="text"
          name="email"
          value={email}
        />

        <FormInput
          onChange={handelChange}
          label="Password"
          type="password"
          name="password"
          value={password}
        />

        <FormInput
          onChange={handelChange}
          label="Conform Password"
          type="password"
          name="conformPassword"
          value={conformPassword}
        />
        <Button  buttonType="inverted" type='submit' >Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpFrom;
