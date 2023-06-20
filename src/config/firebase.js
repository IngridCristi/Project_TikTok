
import { initializeApp } from "firebase/app";
import { getFirestore  } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyB2nhqanIeWBk4xBtIy3G_LXlq8AuM8W9M",
  authDomain: "tiktok-jornada-b44da.firebaseapp.com",
  projectId: "tiktok-jornada-b44da",
  storageBucket: "tiktok-jornada-b44da.appspot.com",
  messagingSenderId: "290496901609",
  appId: "1:290496901609:web:e6947746c6b6e7feb9db78"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

export default db;