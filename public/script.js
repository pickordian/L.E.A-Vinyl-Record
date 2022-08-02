import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {
    getFirestore, collection, getDoc,
    addDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoNJEcV3Y8_wYJ_iseQUVbPqZNOtWfu8c",
    authDomain: "lea-vinyl.firebaseapp.com",
    projectId: "lea-vinyl",
    storageBucket: "lea-vinyl.appspot.com",
    messagingSenderId: "1005866533119",
    appId: "1:1005866533119:web:de4d5128a5a1b7533f8cca",
    measurementId: "G-HN67K4TXHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

 // registration 
const user_db = collection(db, 'user_info');
const RegForm = document.querySelector('#RegForm');
RegForm.addEventListener('submit', (e) => {
    e.prevenDefault();
});
addDoc(user_db, {
email: RegForm.email.value,
    first_name: RegForm.first_name.value,
    last_name: RegForm.last_name.value,
    password: RegForm.password.value,
})
    .then(() => {
        RegForm.reset();
        console.log("Reg complete.");
    });
