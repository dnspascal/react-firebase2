// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf0wRDMIuD_MeXMhxtPpyUVQpqyah8Y30",
  authDomain: "fir-d6ad6.firebaseapp.com",
  projectId: "fir-d6ad6",
  storageBucket: "fir-d6ad6.appspot.com",
  messagingSenderId: "101236253030",
  appId: "1:101236253030:web:24bbee61ae912a29a7e8a7",
  measurementId: "G-TH49WLEX13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);