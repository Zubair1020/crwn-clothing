import SignUpFrom from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";
import { AuthenticationCon } from "./authentication.style";

const Authentication = () => {
  return (
    <AuthenticationCon>
      <SignInForm />
      <SignUpFrom />
    </AuthenticationCon>
  );
};

export default Authentication;
