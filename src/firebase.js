// Connecting to firebase frontend
import firebase from "firebase";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC_Bs8ceqH6nqgOR4qZ1rvg7OUC_88Pz-Q",
    authDomain: "clone-f605b.firebaseapp.com",
    databaseURL: "https://clone-f605b.firebaseio.com",
    projectId: "clone-f605b",
    storageBucket: "clone-f605b.appspot.com",
    messagingSenderId: "331537730824",
    appId: "1:331537730824:web:0c3d83696b76a775dbb0bd",
    measurementId: "G-YDW1DCKYSZ"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //db isn't required
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db, auth};
