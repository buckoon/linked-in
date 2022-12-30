// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAFJr0Inm2tthrsUG7ScWWLSCyF89Mi0Vc",
    authDomain: "linkedin-clone-7d3f6.firebaseapp.com",
    projectId: "linkedin-clone-7d3f6",
    storageBucket: "linkedin-clone-7d3f6.appspot.com",
    messagingSenderId: "909438776971",
    appId: "1:909438776971:web:bf653d93d47b78515a868e",
    measurementId: "G-E84HEDK23F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};