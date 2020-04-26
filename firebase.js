import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDUVW4aOyqhXzEfSw2C336DHoM5NJQuaJw",
    authDomain: "nh-companion.firebaseapp.com",
    databaseURL: "https://nh-companion.firebaseio.com",
    projectId: "nh-companion",
    storageBucket: "nh-companion.appspot.com",
    messagingSenderId: "404394288840",
    appId: "1:404394288840:web:41f2ff363a27816050e7fd",
    measurementId: "G-PYKSZ8LWFQ"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const Auth = firebase.auth();

