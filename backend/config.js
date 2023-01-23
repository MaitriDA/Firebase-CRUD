const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyCqe0jGluD3BE7m0R8kbSIBi5Yha_f2RBQ",
  authDomain: "crud-cc5e0.firebaseapp.com",
  projectId: "crud-cc5e0",
  storageBucket: "crud-cc5e0.appspot.com",
  messagingSenderId: "763780375343",
  appId: "1:763780375343:web:8ae71e9e1b1ad1a3a537da"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Details = db.collection("details");
module.exports = {Details,db};