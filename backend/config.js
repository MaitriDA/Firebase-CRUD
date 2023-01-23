const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyBcmLuZwbytZAO2s5u7dvsPHX4FZF8tvQY",
  authDomain: "crud-234db.firebaseapp.com",
  projectId: "crud-234db",
  storageBucket: "crud-234db.appspot.com",
  messagingSenderId: "659686715378",
  appId: "1:659686715378:web:038b7ba4ee4b6e323a056b"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Details = db.collection("details");
module.exports = {Details,db};