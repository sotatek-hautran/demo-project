import { put, takeEvery, all } from "redux-saga/effects";
import * as actionAuthTypes from "../constants/actionAuthTypes";
import firebaseApp from "../../firebase";
function* signIn(payload) {
  try {
    yield firebaseApp
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password);
    const currentUser = yield firebaseApp.auth().currentUser;
    localStorage.setItem("isAuthentication", true);
    yield put({ type: actionAuthTypes.SIGN_IN_SUCCESS, currentUser });
  } catch (error) {
    yield put({ type: actionAuthTypes.SIGN_IN_FAILED, error });
  }
}

function* watchSignIn() {
  console.log("watchSignIn");
  yield takeEvery(actionAuthTypes.SIGN_IN_REQUEST, signIn);
}

function* signOut() {
  yield firebaseApp.auth().signOut();
  localStorage.clear();
  yield put({ type: actionAuthTypes.SIGN_OUT_SUCCESS });
}

function* watchSignOut() {
  console.log("watchSignOut");
  yield takeEvery(actionAuthTypes.SIGN_OUT_REQUEST, signOut);
}

function* wacthFetchUser() {
  console.log("wacthFetchUser");
  const isAuthentication = localStorage.getItem("isAuthentication");
  if (isAuthentication) {
    const currentUser = yield firebaseApp
      .auth()
      .onAuthStateChanged((currentUser) => {
        if (currentUser) {
          return currentUser;
        }
      });
    yield put({ type: actionAuthTypes.FETCH_USER_SUCCESS, currentUser });
  }
}
export default function* authSaga() {
  yield all([watchSignIn(), watchSignOut(), wacthFetchUser()]);
}
