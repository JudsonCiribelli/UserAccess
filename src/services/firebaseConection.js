import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth/web-extension";

const firebaseConfig = {
  apiKey: "AIzaSyAZj7fDQ3nHTx6Rhwt0BBj9BuL1YD5-vi0",
  authDomain: "useraccess-3a491.firebaseapp.com",
  projectId: "useraccess-3a491",
  storageBucket: "useraccess-3a491.firebasestorage.app",
  messagingSenderId: "260965129172",
  appId: "1:260965129172:web:d510abe01f880b7b8ad441",
  measurementId: "G-2JEEQBBH26",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new FacebookAuthProvider();

export { db, auth };
