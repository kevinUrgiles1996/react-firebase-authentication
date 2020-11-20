import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyBNRWx0VKjHYSiVKMtLf2FK1dgFg8zuYLA",
  authDomain: "authentication-e6d6e.firebaseapp.com",
  databaseURL: "https://authentication-e6d6e.firebaseio.com",
  projectId: "authentication-e6d6e",
  storageBucket: "authentication-e6d6e.appspot.com",
  messagingSenderId: "299028835952",
  appId: "1:299028835952:web:9d020bdf02c7c158a28eb5"
})

export const auth = firebase.auth();

export default app;