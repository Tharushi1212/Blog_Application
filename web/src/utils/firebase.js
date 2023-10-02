// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAzxqbJC2a0QaRqOfHx5_bT4CwDJs4y5HY',
  authDomain: 'blogs-5e979.firebaseapp.com',
  projectId: 'blogs-5e979',
  storageBucket: 'blogs-5e979.appspot.com',
  messagingSenderId: '464066675542',
  appId: '1:464066675542:web:e13510d337bafa2a034cf7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

