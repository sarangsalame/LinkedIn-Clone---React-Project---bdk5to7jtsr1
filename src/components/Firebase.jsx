// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyB0Yp2TjnD1usMfYlZlKCfKXdP4rW4HljU",
    authDomain: "linkedin-clone-ns-203cc.firebaseapp.com",
    projectId: "linkedin-clone-ns-203cc",
    storageBucket: "linkedin-clone-ns-203cc.appspot.com",
    messagingSenderId: "197416674252",
    appId: "1:197416674252:web:6c5878115640c5b138f369",
    measurementId: "G-N8NJQ5S80R"
  };
  const firebaseApp = firebase.intializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  export {db}