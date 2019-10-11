import firebase from "firebase";
var firebaseConfig = {
  apiKey: "YOUR KEY",
  authDomain: "YOUR DOMAIN",
  databaseURL: "YOUR DATABASE URL",
  projectId: "YOUR PROJECT ID",
  storageBucket: "",
  messagingSenderId: "YOUR SENDER ID",
  appId: "YOUR APP ID",
  measurementId: "YOUR MEASUREMENT ID"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
