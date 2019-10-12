const firebase = require("firebase");
const firebaseConfig: Object = {
    apiKey: "AIzaSyDk9aPZCg2FdFyp13m-3mgyZvYHB2vWbyg",
    authDomain: "vuewebserver-88b2a.firebaseapp.com",
    databaseURL: "https://vuewebserver-88b2a.firebaseio.com",
    projectId: "vuewebserver-88b2a",
    storageBucket: "vuewebserver-88b2a.appspot.com",
    messagingSenderId: "391407324633",
    appId: "1:391407324633:web:f7c41a62f25210d7"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {
  db
}

