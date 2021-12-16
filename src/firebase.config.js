// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAmrOx2YltsJcM_edUcYJurXcSLVm6ci-Q",
    authDomain: "next-level-recon.firebaseapp.com",
    databaseURL: "https://next-level-recon-default-rtdb.firebaseio.com",
    projectId: "next-level-recon",
    storageBucket: "next-level-recon.appspot.com",
    messagingSenderId: "554879789570",
    appId: "1:554879789570:web:7d19a934cd63ad2267951b",
    measurementId: "G-1YDY74LJB8"
};

// Initialize Firebase
let app;
app = initializeApp(firebaseConfig)
export const db = getFirestore()