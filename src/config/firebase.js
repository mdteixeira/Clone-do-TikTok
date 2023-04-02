import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyAvr6wN-1Fu1mxdSJxUL1W4CPTECoaDGIY",
    authDomain: "clone-do-tiktok--jornada.firebaseapp.com",
    projectId: "clone-do-tiktok--jornada",
    storageBucket: "clone-do-tiktok--jornada.appspot.com",
    messagingSenderId: "240258222445",
    appId: "1:240258222445:web:72f77a65d7a2b0739ef264"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;