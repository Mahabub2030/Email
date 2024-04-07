// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASF9bNzYETxgZsZ_QknlLFUi3Sy9m8Pi4",
  authDomain: "uesr-email-password-auth-71a95.firebaseapp.com",
  projectId: "uesr-email-password-auth-71a95",
  storageBucket: "uesr-email-password-auth-71a95.appspot.com",
  messagingSenderId: "72538687830",
  appId: "1:72538687830:web:945cd86cb31c6af2fceef7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export default app;
const auth = getAuth(app);
export default auth;