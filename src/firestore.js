import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDHL1CoDv-fQc_uEGuiVXEbTKPRYh65K7w",
    authDomain: "tradex-chat.firebaseapp.com",
    databaseURL: "https://tradex-chat.firebaseio.com",
    projectId: "tradex-chat",
    storageBucket: "tradex-chat.appspot.com",
    messagingSenderId: "589334644454",
    appId: "1:589334644454:web:3185d38221822872031d27",
    measurementId: "G-HXV1P1K4DJ"
  };


firebase.initializeApp(firebaseConfig);

export default firebase;