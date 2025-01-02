// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByL1K8CVNZ4krBXNQR0YymcKeQh6B_5VA",
  authDomain: "vite-contact-ab90c.firebaseapp.com",
  projectId: "vite-contact-ab90c",
  storageBucket: "vite-contact-ab90c.firebasestorage.app",
  messagingSenderId: "181989283830",
  appId: "1:181989283830:web:ebfdcedd69919e0da759d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);