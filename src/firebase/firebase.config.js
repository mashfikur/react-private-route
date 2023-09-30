// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyrHzSfuxsX2G5i2UvgAGNbByzo2easAg",
  authDomain: "react-private-route-7895c.firebaseapp.com",
  projectId: "react-private-route-7895c",
  storageBucket: "react-private-route-7895c.appspot.com",
  messagingSenderId: "926071480582",
  appId: "1:926071480582:web:7093b98ce767d9cb737e87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export default auth;
