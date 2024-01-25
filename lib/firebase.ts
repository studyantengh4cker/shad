// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDolGWzReOMdxMFcEsfooxqDlrFcg0z3GY",
  authDomain: "school-eec36.firebaseapp.com",
  projectId: "school-eec36",
  storageBucket: "school-eec36.appspot.com",
  messagingSenderId: "985573682847",
  appId: "1:985573682847:web:2309e6c9e24e25cfb63caa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
