import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import React from "react";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>sign in page</h1>

      <button onClick={logGoogleUser}>sign In With Google Popup</button>
      <h2>start with 92 video number</h2>
    </div>
  );
};

export default SignIn;
