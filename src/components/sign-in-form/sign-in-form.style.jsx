import styled from "styled-components";
import { GoogleSignInButton } from "../button/button.styles";

export const SignInCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }
`;

export const ButtonsCon = styled.div`
  display: flex;
  justify-content: space-between;

  ${GoogleSignInButton} {
    font-weight: 400;
  }
`;
