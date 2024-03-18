import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCIgZVWzujwXtYctLSkqvunhv9RiCp20V8",
  authDomain: "fast-feedback-demo-887a3.firebaseapp.com",
  projectId: "fast-feedback-demo-887a3",
  storageBucket: "fast-feedback-demo-887a3.appspot.com",
  messagingSenderId: "275992427927",
  appId: "1:275992427927:web:7a649a5b03b4c774b558d2",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
