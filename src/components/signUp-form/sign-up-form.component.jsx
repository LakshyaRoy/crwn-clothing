import React from "react";
import { useState } from "react";
import { auth, db, signUp } from "../../utils/firebase/firebase.utils";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  // console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(email, password);
    // console.log(formFields);
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const createUser = await signUp(email, password);
      console.log(createUser);
      await updateProfile(auth.currentUser, {
        displayName: displayName.toLowerCase().trim(),
      });

      const userRef = doc(db, "user", createUser.user.uid);
      await setDoc(userRef, {
        userId: createUser.user.uid,
        email: email.toLowerCase(),
        displayName: displayName.toLowerCase().trim(),
        authProvider: "Email and password",
        createdAt: new Date(),
      });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in Use Please Try with Another Email Id! ");
      } else {
        console.log("user creation encountered an error   ", error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1> signUp with your email and password </h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label htmlFor=""> Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Sign Up </button>
      </form>
    </div>
  );
};

export default SignUpForm;
