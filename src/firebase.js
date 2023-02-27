import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyAlUpq-yLmFSrapiDYlxeg691CQHQ3NEcU",
  authDomain: "roadaccidents-harish.firebaseapp.com",
  projectId: "roadaccidents-harish",
  storageBucket: "roadaccidents-harish.appspot.com",
  messagingSenderId: "641023244396",
  appId: "1:641023244396:web:e9ab2dc3ff265488808049",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;
