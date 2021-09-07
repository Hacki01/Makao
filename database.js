import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-analytics.js";
import { getDatabase , ref , set} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyAe8CcfBz-XFkW6fIsJJYTe7zDXmoD4xWM",
    authDomain: "makao-e9a6c.firebaseapp.com",
    databaseURL: "https://makao-e9a6c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "makao-e9a6c",
    storageBucket: "makao-e9a6c.appspot.com",
    messagingSenderId: "150219683591",
    appId: "1:150219683591:web:adbc7a67e95b70caa777a2",
    measurementId: "G-7NMMER2CFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase()
export let db = db