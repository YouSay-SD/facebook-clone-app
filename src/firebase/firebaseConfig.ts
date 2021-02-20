import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBqQlWvEwYMNbFr1VTcpaOyknEl0Swf6-I',
  authDomain: 'facebook-clone-65dd7.firebaseapp.com',
  projectId: 'facebook-clone-65dd7',
  storageBucket: 'facebook-clone-65dd7.appspot.com',
  messagingSenderId: '431833926159',
  appId: '1:431833926159:web:338f2523bd79695926717a',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
