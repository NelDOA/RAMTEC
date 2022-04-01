import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9vnXTaiOQbgSsLigRqYD0_C9weT3kGSI",
    authDomain: "ramtec-sas.firebaseapp.com",
    projectId: "ramtec-sas",
    storageBucket: "ramtec-sas.appspot.com",
    messagingSenderId: "242138433647",
    appId: "1:242138433647:web:5f7719b6f38d93b9d0659a",
    measurementId: "G-DKXL6BDZBL"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

//   const db = firebase.firestore();
  const googleAuthProvider = new GoogleAuthProvider();

  export {
    //   db,
      googleAuthProvider,
  }