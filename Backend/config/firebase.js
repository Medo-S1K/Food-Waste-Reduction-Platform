// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Authentication
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7uLyfoGpgJkvXtAo7EgpvNfjF6CXNdcM",
  authDomain: "food-waste-reduction-34696.firebaseapp.com",
  projectId: "food-waste-reduction-34696",
  storageBucket: "food-waste-reduction-34696.appspot.com",
  messagingSenderId: "1021247372449",
  appId: "1:1021247372449:web:f2a3d34c58284cef64c4e0",
  measurementId: "G-06KBS0E55T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); // Authentication instance
const db = getFirestore(app); // Firestore instance

// Export auth and db for use in other parts of your app
export { auth, db };
