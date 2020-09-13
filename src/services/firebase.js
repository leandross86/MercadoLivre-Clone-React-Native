import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDrVEDdMO6S275A8Vy1fns7b4zz-U_7nOE",
  authDomain: "mercadolivre-clonern-40393.firebaseapp.com",
  databaseURL: "https://mercadolivre-clonern-40393.firebaseio.com",
  projectId: "mercadolivre-clonern-40393",
  storageBucket: "mercadolivre-clonern-40393.appspot.com",
  messagingSenderId: "656132829307",
  appId: "1:656132829307:web:1965883f2642bde4f372de",
  measurementId: "G-EYR40DSGC2"
};

firebase.initializeApp(firebaseConfig);

export default firebase