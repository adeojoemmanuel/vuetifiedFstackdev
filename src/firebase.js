import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDQQ8J7oHrf2caRJ39j5JwijFZ3xbQjG3o",
    authDomain: "fstackdev-training.firebaseapp.com",
    databaseURL: "https://fstackdev-training.firebaseio.com",
    projectId: "fstackdev-training",
    storageBucket: "fstackdev-training.appspot.com",
    messagingSenderId: "880906188092",
    appId: "1:880906188092:web:da72a3faa3d09c7f239a39",
    measurementId: "G-TTXTF7ZD9W"
});

let db = firebaseApp.firestore();

export default db;