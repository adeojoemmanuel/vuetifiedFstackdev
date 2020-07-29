import { firebase } from "@firebase/app";
import "@firebase/firestore";

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyDQQ8J7oHrf2caRJ39j5JwijFZ3xbQjG3o",
//     authDomain: "fstackdev-training.firebaseapp.com",
//     databaseURL: "https://fstackdev-training.firebaseio.com",
//     projectId: "fstackdev-training",
//     storageBucket: "fstackdev-training.appspot.com",
//     messagingSenderId: "880906188092",
//     appId: "1:880906188092:web:da72a3faa3d09c7f239a39",
//     measurementId: "G-TTXTF7ZD9W"
// });

const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyBzhpADIKV90PDjpJJqwQDnB30RuKVLkHg",
    authDomain: "fstackdev-training-f7309.firebaseapp.com",
    databaseURL: "https://fstackdev-training-f7309.firebaseio.com",
    projectId: "fstackdev-training-f7309",
    storageBucket: "fstackdev-training-f7309.appspot.com",
    messagingSenderId: "759745417928",
    appId: "1:759745417928:web:5aeb830af610b1b95ecbfd",
    measurementId: "G-TFVKRRJWMC"
});

let db = firebaseApp.firestore();

export default db;