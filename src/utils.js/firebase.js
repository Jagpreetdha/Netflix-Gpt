/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtIfRxRpNqTSTtOwKm6VITp6JDxkIYaA0",
  authDomain: "jdnetflix-76359.firebaseapp.com",
  projectId: "jdnetflix-76359",
  storageBucket: "jdnetflix-76359.appspot.com",
  messagingSenderId: "847891567096",
  appId: "1:847891567096:web:b769add6b663705b6d860d",
  measurementId: "G-T90FQ4HL1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()