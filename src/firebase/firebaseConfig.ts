import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBqQlWvEwYMNbFr1VTcpaOyknEl0Swf6-I',
  authDomain: 'facebook-clone-65dd7.firebaseapp.com',
  projectId: 'facebook-clone-65dd7',
  storageBucket: 'facebook-clone-65dd7.appspot.com',
  messagingSenderId: '431833926159',
  appId: '1:431833926159:web:338f2523bd79695926717a',

  // apiKey: 'AIzaSyCxJoVL62k_89ODdauAxgTV8XhEFHODqUA',
  // authDomain: 'sql-demos-c7ea3.firebaseapp.com',
  // databaseURL: 'https://sql-demos-c7ea3.firebaseio.com',
  // projectId: 'sql-demos-c7ea3',
  // storageBucket: 'sql-demos-c7ea3.appspot.com',
  // messagingSenderId: '773707196300',
  // appId: '1:773707196300:web:9d9c310466f509cf2618a9',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const usersRef = db.collection('users');
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase, usersRef };
