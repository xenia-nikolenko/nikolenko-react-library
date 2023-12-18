
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW2P8L90pwXv5RN0MAZLHnnuyCCp8cpeU",
  authDomain: "react-library-dfca8.firebaseapp.com",
  databaseURL: "https://react-library-dfca8-default-rtdb.firebaseio.com",
  projectId: "react-library-dfca8",
  storageBucket: "react-library-dfca8.appspot.com",
  messagingSenderId: "136357832561",
  appId: "1:136357832561:web:0831639f2e5ab13e59f8d0"
};

const app =  initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);



