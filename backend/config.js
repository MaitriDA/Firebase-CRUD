const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyAY0D1Vws1G5pzO6MtpMfhgRy_FIUG0Hms",
    authDomain: "internship-361dc.firebaseapp.com",
    projectId: "internship-361dc",
    storageBucket: "internship-361dc.appspot.com",
    messagingSenderId: "1087759087002",
    appId: "1:1087759087002:web:a24d5b14241468fb093623"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Details = db.collection("details");
module.exports = {Details,db};