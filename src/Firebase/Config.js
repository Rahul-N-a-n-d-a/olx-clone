// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCTT4DkJ-VCCfuicofy8bWBZVV91aWohgQ",
  authDomain: "olx-clone-3b7ce.firebaseapp.com",
  projectId: "olx-clone-3b7ce",
  storageBucket: "olx-clone-3b7ce.appspot.com",
  messagingSenderId: "732252271004",
  appId: "1:732252271004:web:a6ce13b6d4df4d74ff9859",
  measurementId: "G-NDHM6M8EV2"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage =  getStorage(app)

