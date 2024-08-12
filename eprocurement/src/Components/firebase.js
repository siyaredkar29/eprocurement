// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARi6AWbN1-XhdPF8OCN9yhGcAhwSAnK4g",
  authDomain: "eprocurement-d1959.firebaseapp.com",
  projectId: "eprocurement-d1959",
  storageBucket: "eprocurement-d1959.appspot.com",
  messagingSenderId: "159695060500",
  appId: "1:159695060500:web:5b9d07b932faf50623f101"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db=getFirestore(app);
export default app;