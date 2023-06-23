import { initializeApp } from "firebase/app";

import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account", // [OPTIONAL] Set the authentication flow to select_account
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

export const db = getFirestore(firebaseapp);

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "user", userAuth.uid);
  // const userDocRefQuery = query(
  //   collection(doc(db, "user", where(userAuth.uid, "!=", "userId")))
  // );

  // console.log(userDocRefQuery);
  // console.log(userAuth.uid);
  // console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot);
  // console.log(userSnapshot.exists());

  // if user data exists
  if (!userSnapshot.exists()) {
    const { displayName, email, uid } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        uid,
        createdAt,
        ...additionalInformation,
      });
    } catch (e) {
      console.log("error creating the user !", e);
    }
  }
  return userDocRef;
};

export const signUp = (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};
