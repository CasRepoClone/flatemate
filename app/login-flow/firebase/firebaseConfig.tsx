import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDCV_uFpi9jhbt49HPfm8Znto-4U1f1ROg",
  authDomain: "flatmate-6bfc9.firebaseapp.com",
  projectId: "flatmate-6bfc9",
  storageBucket: "flatmate-6bfc9.appspot.com",  // corrected here
  messagingSenderId: "212081648053",
  appId: "1:212081648053:web:98fe62f36e498ef90ef9fc",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };