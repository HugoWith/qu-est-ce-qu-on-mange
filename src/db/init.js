import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4o2fvDWdWpjKKiAEOx_carXE1KOQAo4c",
  authDomain: "questcequonmange.firebaseapp.com",
  databaseURL: "https://questcequonmange.firebaseio.com",
  projectId: "questcequonmange",
  storageBucket: "questcequonmange.appspot.com",
  messagingSenderId: "324059357918",
  appId: "1:324059357918:web:c4d05fbdb05988ccdf984f",
  measurementId: "G-4HYTGT2CE2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true });

//export firestore

export default firebaseApp.firestore();
