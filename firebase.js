import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBd6Sy9Vexy39317TqLBou5ZBzMEiBugLg",
    authDomain: "instagram-v2-cb444.firebaseapp.com",
    projectId: "instagram-v2-cb444",
    storageBucket: "instagram-v2-cb444.appspot.com",
    messagingSenderId: "84572964202",
    appId: "1:84572964202:web:31d5cfca4a7bdfc02f1113"
  };

  //Initialize firebase
  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

  const db = getFirestore();

  const storage = getStorage();

  export{ app, db, storage };