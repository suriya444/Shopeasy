// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore';
import{getAuth}from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAoA3s8-x5LJveuqXaNTs_jc-fTnEa_lv8",
  authDomain: "shopeasy-77ea9.firebaseapp.com",
  projectId: "shopeasy-77ea9",
  storageBucket: "shopeasy-77ea9.appspot.com",
  messagingSenderId: "616712772606",
  appId: "1:616712772606:web:e19633482305c14636feaf",
  measurementId: "G-K7X9CXHRDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB=getFirestore(app);
const auth=getAuth(app);
export {fireDB,auth}