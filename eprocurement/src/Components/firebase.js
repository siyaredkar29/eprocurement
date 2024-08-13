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




import { getDatabase, ref, runTransaction,onValue } from 'firebase/database';

const gdb = getDatabase();

export const incrementVisitorCount = async () => {
  const visitorCountRef = ref(gdb, 'visitorCount');

  try {
    await runTransaction(visitorCountRef, (currentCount) => {
      if (currentCount === null) {
        return 1;
      } else {
        return currentCount + 1;
      }
    });
  } catch (error) {
    console.error("Error incrementing visitor count:", error);
  }
};

export const getVisitorCount = (callback) => {
    const visitorCountRef = ref(gdb, 'visitorCount');
  
    onValue(visitorCountRef, (snapshot) => {
      const count = snapshot.val();
      callback(count);
    });
  };

  export const auth = getAuth();
export const db=getFirestore(app);
export default app;