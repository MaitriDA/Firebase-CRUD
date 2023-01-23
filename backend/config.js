const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyDbIotWN5erYRu0eCmoz5aDSGClERNWvN8",
  authDomain: "internship-698b8.firebaseapp.com",
  projectId: "internship-698b8",
  storageBucket: "internship-698b8.appspot.com",
  messagingSenderId: "181698493571",
  appId: "1:181698493571:web:88d519425d3a611b716fb6"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Details = db.collection("details");
module.exports = {Details,db};