import React, { useState } from "react";
import { signIn, signOut } from "./redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const signInError = useSelector((state) => state.auth.signInError);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const signInLoading = useSelector((state) => state.auth.signInLoading);
  const signOutLoading = useSelector((state) => state.auth.signOutLoading);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleSubmit = () => {
    setEmail("");
    setPassword("");
    dispatch(signIn(email, password));
  };
  const handleSignOut = () => {
    dispatch(signOut());
  };
  return (
    <div>
      {signInLoading ? "loading" : ""}
      {signInError ? signInError.message : ""}
      {currentUser ? (
        <div>
          {signOutLoading ? "loading" : ""}
          <p>{currentUser.email}</p>
          <button onClick={handleSignOut}>sign out</button>
        </div>
      ) : (
        ""
      )}
      <p>email</p>
      <input value={email} onChange={handleEmailChange} />
      <p>password</p>
      <input value={password} onChange={handlePasswordChange} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default App;
