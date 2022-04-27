import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const app = initializeApp({
  apiKey: "AIzaSyCur8XWnftQU85nCOltEHzQXMkv5rEIq40",
  authDomain: "base-stuffed.firebaseapp.com",
  projectId: "base-stuffed",
  storageBucket: "base-stuffed.appspot.com",
  messagingSenderId: "212364084545",
  appId: "1:212364084545:web:0d1b60e01eccc98b178dc0",
});

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
