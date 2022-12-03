// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhLQgDlvIDB4H5rLV70h38QvM9C2prJNM",
  authDomain: "chat-app-f5d88.firebaseapp.com",
  projectId: "chat-app-f5d88",
  storageBucket: "chat-app-f5d88.appspot.com",
  messagingSenderId: "425942379586",
  appId: "1:425942379586:web:2e673fe54781a8525f51db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);