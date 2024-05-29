// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-34067.firebaseapp.com",
  projectId: "mern-blog-34067",
  storageBucket: "mern-blog-34067.appspot.com",
  messagingSenderId: "953751409281",
  appId: "1:953751409281:web:c80c6643a867ef3df1f380"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);