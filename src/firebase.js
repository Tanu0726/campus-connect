// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // ✅ Import auth

const firebaseConfig = {
  apiKey: "AIzaSyBCEBkmOc7j7hDPyWXoNpRDcYruYgSUhfA",
  authDomain: "campus-connect-38c3e.firebaseapp.com",
  projectId: "campus-connect-38c3e",
  storageBucket: "campus-connect-38c3e.appspot.com", // ✅ corrected .app to .appspot.com
  messagingSenderId: "137970279139",
  appId: "1:137970279139:web:b2b669b9f6aba7414cdbd6",
  measurementId: "G-DGZESVV362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // ✅ Initialize auth

// ✅ Export both app and auth
export { app, auth };
