import * as actionAuthTypes from "../constants/actionAuthTypes";

export const signIn = (email, password) => {
  return {
    type: actionAuthTypes.SIGN_IN_REQUEST,
    email: email,
    password: password,
  };
};

export const signOut = () => {
  return {
    type: actionAuthTypes.SIGN_OUT_REQUEST,
  };
};
