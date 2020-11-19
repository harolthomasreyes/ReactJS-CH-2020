import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyXfzMAh8vT3a0Po2fY1I0ftbYGLB32DE",
  authDomain: "test-coderhuse.firebaseapp.com",
  databaseURL: "https://test-coderhuse.firebaseio.com",
  projectId: "test-coderhuse",
  storageBucket: "test-coderhuse.appspot.com",
  messagingSenderId: "1017896524213",
  appId: "1:1017896524213:web:687602d3ff365c98f1e1fc",
  measurementId: "G-78G725J8Z7",
};

const DB = firebase.initializeApp(firebaseConfig);
export const GetDBFireBase = () => firebase.firestore(DB);
