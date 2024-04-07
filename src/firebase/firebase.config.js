// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnnF1hkfA58L4D32B6eSekpinbl-c8VbY",
  authDomain: "auth-new-project-e32fa.firebaseapp.com",
  projectId: "auth-new-project-e32fa",
  storageBucket: "auth-new-project-e32fa.appspot.com",
  messagingSenderId: "192132464880",
  appId: "1:192132464880:web:ea26b2e029de21dfe84235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;