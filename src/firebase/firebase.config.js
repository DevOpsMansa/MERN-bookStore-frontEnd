// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${import.meta.env.MERN_BOOKSTORE_API_KEY}`,
  authDomain: `${import.meta.env.MERN_BOOKSTORE_AUTH_DOMAIN}`,
  projectId: "mern-bookstore-e6403",
  storageBucket: "mern-bookstore-e6403.appspot.com",
  messagingSenderId: "78111749188",
  appId: "1:78111749188:web:826dd690ce71606a64b811"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;