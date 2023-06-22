import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnGL3RkoCyPGfad995cvhY7l1TpeXZfng",
  authDomain: "crwn-clothing-db-44d08.firebaseapp.com",
  projectId: "crwn-clothing-db-44d08",
  storageBucket: "crwn-clothing-db-44d08.appspot.com",
  messagingSenderId: "824002122529",
  appId: "1:824002122529:web:62bc198e6c57abc2076460",
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

<<<<<<< HEAD
// export const addCollectionAndDocument = async () => {
//   const collectionRef = collection(db, "collection");
//   const q = query(collectionRef);
//   const querySnapshot = await getDocs(q);

//   const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
//     const { title, items } = docSnapshot.data();
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});

//   return categoryMap;
// };

=======
>>>>>>> dc9b14
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "collection");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

<<<<<<< HEAD
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
=======
  const categoryMap = querySnapshot.docs.map((docSnapShot) =>
    docSnapShot.data()
  );

  return categoryMap;
>>>>>>> dc9b14
};

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
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
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
