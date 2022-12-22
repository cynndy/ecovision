import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
}

export default initializeApp(firebaseConfig);
