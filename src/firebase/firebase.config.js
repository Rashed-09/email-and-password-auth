// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7JCt3Nbim6HUNsvikboqtu1py_AXruVc",
  authDomain: "email-and-password-auth-490f5.firebaseapp.com",
  projectId: "email-and-password-auth-490f5",
  storageBucket: "email-and-password-auth-490f5.firebasestorage.app",
  messagingSenderId: "865395325036",
  appId: "1:865395325036:web:8188db9a7064b35bf14049",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth;
