import * as actionAuthTypes from "../constants/actionAuthTypes";

const initialState = {
  currentUser: null,
  signInError: null,
  signInLoading: false,
  signOutLoading: false,
};

const authReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case actionAuthTypes.SIGN_IN_REQUEST:
      return { ...state, signInLoading: true };
    case actionAuthTypes.SIGN_OUT_REQUEST:
      return { ...state, signOutLoading: true };
    case actionAuthTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.currentUser,
        signInLoading: false,
      };
    case actionAuthTypes.SIGN_IN_FAILED:
      return { ...state, signInError: action.error, signInLoading: false };

    case actionAuthTypes.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, signOutLoading: false };
    case actionAuthTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.currentUser,
      };
    default:
      return state;
  }
};

export default authReducer;
