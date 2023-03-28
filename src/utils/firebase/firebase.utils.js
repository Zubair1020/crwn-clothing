import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXjZKjdaHPNcxgfkejXxYGJJyIgE4wEu4",
  authDomain: "crwn-clothing-db-9dec0.firebaseapp.com",
  projectId: "crwn-clothing-db-9dec0",
  storageBucket: "crwn-clothing-db-9dec0.appspot.com",
  messagingSenderId: "715010623060",
  appId: "1:715010623060:web:77031c4b207250c0f78fc1",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        createdAt,
        displayName,
        email,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }

  return userDocRef;
};
