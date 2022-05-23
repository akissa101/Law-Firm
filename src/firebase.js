import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInAnonymously,
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe9LsI_3hnJ1YNQWOUzm1QOPR82Fj8OHE",
  authDomain: "weediminc-afa5d.firebaseapp.com",
  projectId: "weediminc-afa5d",
  storageBucket: "weediminc-afa5d.appspot.com",
  messagingSenderId: "307053965171",
  appId: "1:307053965171:web:f5ad6f0aa1e31c20aadf06",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export const signinWithGoogle = () => {
  return signInWithPopup();
};

export function signout() {
  return signOut(auth);
}

// export function useAuth() {
//   const [currentUser, setCurrentUser] = useState();
//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
//     return unsub;
//   }, []);

//   return currentUser;
// }
