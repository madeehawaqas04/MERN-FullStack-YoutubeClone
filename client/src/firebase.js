import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "video-ef699.firebaseapp.com",
  projectId: "video-ef699",
  storageBucket: "video-ef699.appspot.com",
  messagingSenderId: "263933447710",
  appId: "1:263933447710:web:78821c2bbeb0fad92ea80f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;

