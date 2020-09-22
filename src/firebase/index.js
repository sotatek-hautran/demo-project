import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-Eym86fawAdv8vNxjGsjrl7zc8ToGF18",
  authDomain: "crawler-data-b3827.firebaseapp.com",
  databaseURL: "https://crawler-data-b3827.firebaseio.com",
  projectId: "crawler-data-b3827",
  storageBucket: "crawler-data-b3827.appspot.com",
  messagingSenderId: "1003314476684",
  appId: "1:1003314476684:web:958dcffb3380472a43ada9",
  measurementId: "G-48VGM7TBKV",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
