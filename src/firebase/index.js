// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF3W95FUGMJHraZi58GyY2viGuB60G5EQ",
  authDomain: "street-artz-tours.firebaseapp.com",
  projectId: "street-artz-tours",
  storageBucket: "street-artz-tours.appspot.com",
  messagingSenderId: "1067493972252",
  appId: "1:1067493972252:web:77af607b7ac68a1a8102d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
