import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB1RUMJsp_YzkfUQJzvy-uiipqjEJ4310I",
    authDomain: "advanced-programming-group.firebaseapp.com",
    projectId: "advanced-programming-group",
    storageBucket: "advanced-programming-group.firebasestorage.app",
    messagingSenderId: "241742580389",
    appId: "1:241742580389:web:63ab71a91831182ddb1b4c",
    measurementId: "G-0T99Q1FLF4"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the auth object
export const auth = getAuth(app);