import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
// Initialize Firebase
firebase.default.initializeApp(firebaseConfig);

const projectStorage = firebase.default.storage();
const projectFirestore = firebase.default.firestore();
const timeStamp = firebase.default.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
