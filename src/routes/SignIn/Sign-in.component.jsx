// commented part is for (<google redirect >)
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/signUp-form/sign-up-form.component";

const SignIn = () => {
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }

  //   fetchData();
  // }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(user);
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>sign in page</h1>

      <button onClick={logGoogleUser}>sign In With Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        sign In With Google redirct
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
