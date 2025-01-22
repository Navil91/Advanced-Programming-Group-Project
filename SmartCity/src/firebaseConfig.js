import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
/**
 * firebaseConfig Integration File
 * 
 * This is used to connect our Firebase project to our React application based on documentation from Firebase.
 * 
 * @category Integration
 * @author Navil Hassan
*/

const firebaseConfig = {
    apiKey: "AIzaSyB1RUMJsp_YzkfUQJzvy-uiipqjEJ4310I",
    authDomain: "advanced-programming-group.firebaseapp.com",
    projectId: "advanced-programming-group",
    storageBucket: "advanced-programming-group.firebasestorage.app",
    messagingSenderId: "241742580389",
    appId: "1:241742580389:web:63ab71a91831182ddb1b4c",
    measurementId: "G-0T99Q1FLF4"
  };
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  
  export const auth = getAuth(app);
  export  {firestore}