import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCWag0NyXgHnDrNoVBLADH9Q0aBOVJVMuQ",
  authDomain: "biblioteca-19092026.firebaseapp.com",
  projectId: "biblioteca-19092026",
  storageBucket: "biblioteca-19092026.firebasestorage.app",
  messagingSenderId: "299795055352",
  appId: "1:299795055352:web:3d034d7534a02eacfff10d",
  measurementId: "G-0GQ5H9MNFB"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);