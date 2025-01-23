
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
const api=import.meta.env.VITE_FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: api,
  authDomain: "flix-24bd9.firebaseapp.com",
  projectId: "flix-24bd9",
  storageBucket: "flix-24bd9.firebasestorage.app",
  messagingSenderId: "901992246622",
  appId: "1:901992246622:web:3af1294fc54fcf794e33cf",
  measurementId: "G-JZB5F0R7HC"
};

const app = initializeApp(firebaseConfig);

export const  auth = getAuth(app);