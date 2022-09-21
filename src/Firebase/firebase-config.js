import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBrV2regfyZyQ-zAysiIjydK5P8vk4VqcM",
    authDomain: "veggigo-3dd49.firebaseapp.com",
    projectId: "veggigo-3dd49",
    storageBucket: "veggigo-3dd49.appspot.com",
    messagingSenderId: "261852369051",
    appId: "1:261852369051:web:1a4af0c50838f8bb58363e",
    measurementId: "G-WD1XMGW9W0"
};
//Initialize the connection
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
