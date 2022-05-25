import { initializeApp } from "firebase/app";

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
export default app;
