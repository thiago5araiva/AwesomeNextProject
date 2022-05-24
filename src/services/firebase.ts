// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiEtgc6MMy8p9ppN_o258kFxAeK4sBfzk",
  authDomain: "awesomewebproject-db071.firebaseapp.com",
  projectId: "awesomewebproject-db071",
  storageBucket: "awesomewebproject-db071.appspot.com",
  messagingSenderId: "557952081852",
  appId: "1:557952081852:web:80a8f09d26e43a75dd55b9",
  measurementId: "G-LD0DF3VZJD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
