import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
const firebaseConfig = {
  apiKey: "AIzaSyB0e_nGILOBGtszs_EMphFIXAnSz46PRwA",
  authDomain: "sendit-f5a4a.firebaseapp.com",
  projectId: "sendit-f5a4a",
  storageBucket: "sendit-f5a4a.appspot.com",
  messagingSenderId: "644930601457",
  appId: "1:644930601457:web:b517bab5b39fb83237c450",
  measurementId: "G-C1HJ0NKQT5",
};
initializeApp(firebaseConfig);
const db = getFirestore(); 
export { db };
