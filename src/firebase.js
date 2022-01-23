import { initializeApp } from "firebase/app";

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

// apiKey: process.env.REACT_APP_APP_KEY,
// authDomain: process.env.REACT_APP_AUTO_DOMAIN,
// projectId: process.env.REACT_APP_PROJECT_ID,
// storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_APP_KEY,
// appId: process.env.REACT_APP_APP_ID,
// measurementId: process.env.REACT_APP_MEASURMENT_ID,
