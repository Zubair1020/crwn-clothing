import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import SignUpFrom from "../../sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logWithGoogle}>Sign in with Google Popup</button>
      <SignUpFrom />
    </div>
  );
};

export default SignIn;
