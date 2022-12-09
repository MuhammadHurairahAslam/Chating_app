import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDRTi1z4jEajER4vAuMuEPHjyEUjFlKJwk",
    authDomain: "chat-b9965.firebaseapp.com",
    projectId: "chat-b9965",
    storageBucket: "chat-b9965.appspot.com",
    messagingSenderId: "744650437563",
    appId: "1:744650437563:web:90daa10c5b8b9f3e350a9e",
    measurementId: "G-4EQC30CSYG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();