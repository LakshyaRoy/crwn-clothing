import React from "react";
import { useState } from "react";

import {
  // auth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import "./sign-In-form.style.scss";

import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    // console.log(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(email, password);
    // console.log(formFields);

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      console.log(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password for Email");
          break;

        case "auth/user-not-found":
          alert("No account found");
          break;

        case "auth/cancelled-popup-request":
          alert("PopUp Request Canceled");
          break;

        case "auth/popup-closed-by-user":
          alert("Request Canceled By User");
          break;

        default:
          console.log(error);
      }

      // if (error.code === "auth/wrong-password") {
      //   alert("Incorrect Password for Email");
      // } else if (error.code === "auth/user-not-found") {
      //   alert("No account found");
      // }

      console.log("error came at signInAuthWithEmailAndPassword ", error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have a Account?</h2>
      <span> SignIn with your email and password </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign-In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
