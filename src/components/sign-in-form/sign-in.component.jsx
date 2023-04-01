import React, { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.style.scss";

const SignInForm = () => {
  const [formField, setFormField] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formField;

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormField((prevField) => ({ ...prevField, [name]: value }));
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signAuthUserWithEmailAndPassword(email, password);
      console.log(res.user.uid);
      setFormField({
        email: "",
        password: "",
      });
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Wrong password. Please try again");
          break;
        case "auth/user-not-found":
          alert("Email is not registered");
          break;
        default:
          console.error(err.code);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with email and password</span>

      <form onSubmit={handelSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign IN</Button>
          <Button
            type="button"
            buttonType="google-sign-in"
            onClick={signInWithGoogle}
          >
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
