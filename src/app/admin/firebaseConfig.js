// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM9Ine_OUo-P7yJMiA4Xk9ukk6FZ69f-s",
  authDomain: "devou-website.firebaseapp.com",
  projectId: "devou-website",
  storageBucket: "devou-website.firebasestorage.app",
  messagingSenderId: "692126557454",
  appId: "1:692126557454:web:e81f3669dd2a68bf32635f",
  measurementId: "G-0CG3CLM1PP"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
