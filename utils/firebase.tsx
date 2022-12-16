import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD9TaZbtazDrCyvGNAjq19QBkSLwp3v2i8",
    authDomain: "automation-web-39ad8.firebaseapp.com",
    projectId: "automation-web-39ad8",
    storageBucket: "automation-web-39ad8.appspot.com",
    messagingSenderId: "11078881432",
    appId: "1:11078881432:web:9147a222fe1656275d00ed",
    measurementId: "G-38QCY68HK9"
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
