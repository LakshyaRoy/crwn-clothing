// commented part is for (<google redirect >)
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

// import {
//   // auth,
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
//   // signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/signUp-form/sign-up-form.component";
import SignInForm from "../../components/sign-In/sign-In-form.component";
import "./Authentication.style.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );

  // {/* <button onClick={signInWithGoogleRedirect}>
  //       sign In With Google redirct
  //     </button> */}

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }

  //   fetchData();
  // }, []);
};

export default Authentication;
