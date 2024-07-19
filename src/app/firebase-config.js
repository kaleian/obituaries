// firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB3LOfsLBD3vJdJIXvXF2hsh2uX9bicWqs",
  authDomain: "obituary-b6dcf.firebaseapp.com",
  projectId: "obituary-b6dcf",
  storageBucket: "obituary-b6dcf.appspot.com",
  messagingSenderId: "154246772883",
  appId: "1:154246772883:web:7bd539c1ca2bf6e95f7566"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
