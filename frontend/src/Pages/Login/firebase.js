import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCe09obxmz1F2VvN9H18PfjywaLQCltNXw",
  authDomain: "flightbookingsystem-95f45.firebaseapp.com",
  projectId: "flightbookingsystem-95f45",
  storageBucket: "flightbookingsystem-95f45.appspot.com",
  messagingSenderId: "1002141373100",
  appId: "1:1002141373100:web:1acd4e149e0352f374c509"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((response) => {
            console.log(response);
        })
        .catch(error => console.log(error))
}

