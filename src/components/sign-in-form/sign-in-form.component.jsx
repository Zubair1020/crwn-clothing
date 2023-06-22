import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  signAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { ButtonsCon, SignInCon } from "./sign-in-form.style.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

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
    await signInWithGooglePopup();
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      await signAuthUserWithEmailAndPassword(email, password);

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
    <SignInCon>
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
        <ButtonsCon>
          <Button type="submit">Sign IN</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            GOOGLE SIGN IN
          </Button>
        </ButtonsCon>
      </form>
    </SignInCon>
  );
};

export default SignInForm;
