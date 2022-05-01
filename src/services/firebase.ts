// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh18EK_AQuGuLVipFDLkIh43zQseEjVdM",
  authDomain: "awesomewebproject-4dd57.firebaseapp.com",
  projectId: "awesomewebproject-4dd57",
  storageBucket: "awesomewebproject-4dd57.appspot.com",
  messagingSenderId: "966850939853",
  appId: "1:966850939853:web:9fd815cc11fd8e56cad284",
  measurementId: "G-C69PGS5P19",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
