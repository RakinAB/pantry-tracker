// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuW4c-_34Rte6FuGBkizrDp6wl4zSd9N8",
  authDomain: "hspantrytracker-e3b32.firebaseapp.com",
  projectId: "hspantrytracker-e3b32",
  storageBucket: "hspantrytracker-e3b32.appspot.com",
  messagingSenderId: "596232604803",
  appId: "1:596232604803:web:410952a65eab322aa89fb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export{app, firestore}