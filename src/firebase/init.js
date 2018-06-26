import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBz7bFhsOlJ68bhlHZ6DjYhBqA1B2hPvmI",
  authDomain: "fir-chat-c5237.firebaseapp.com",
  databaseURL: "https://fir-chat-c5237.firebaseio.com",
  projectId: "fir-chat-c5237",
  storageBucket: "fir-chat-c5237.appspot.com",
  messagingSenderId: "815423507231"
};
firebase.initializeApp(config);

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
