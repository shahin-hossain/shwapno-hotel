// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApTWXqM8ld9kFLyZy-l6L260kSsDQSIYo",
    authDomain: "shawpno-hotel.firebaseapp.com",
    projectId: "shawpno-hotel",
    storageBucket: "shawpno-hotel.appspot.com",
    messagingSenderId: "503916441729",
    appId: "1:503916441729:web:9b2c1890a937c6c12c1d80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;