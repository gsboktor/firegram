import firebase from 'firebase/app';
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCq_5NtPfs1G0kKW8v-p6bN2eLKHguX91E",
    authDomain: "georgeb-firegram.firebaseapp.com",
    projectId: "georgeb-firegram",
    storageBucket: "georgeb-firegram.appspot.com",
    messagingSenderId: "962504189377",
    appId: "1:962504189377:web:2d97a100ceaad77452fb40",
    measurementId: "G-ZM4KV48H9N"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};