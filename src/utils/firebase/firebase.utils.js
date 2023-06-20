import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
// console.log(firebaseapp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account", // [OPTIONAL] Set the authentication flow to select_account
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid);
  // console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  // if user data exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (e) {
      // console.log("error creating the user !", e);
    }
  }
  return userDocRef;
};
