import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvAXJpofBuXDHmABL6GF_y_7Hf8SQgmbc",
  authDomain: "crwn-db-38edb.firebaseapp.com",
  projectId: "crwn-db-38edb",
  storageBucket: "crwn-db-38edb.appspot.com",
  messagingSenderId: "597145292583",
  appId: "1:597145292583:web:2b79fd7d2fefcdcc216302",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
console.log(firebaseapp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account", // [OPTIONAL] Set the authentication flow to select_account
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
