// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/storage'

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyAZQVqwAYN8Dak941Zvbpr3AmVLo8mKN4U",
    authDomain: "next-blog-12963.firebaseapp.com",
    projectId: "next-blog-12963",
    storageBucket: "next-blog-12963.appspot.com",
    messagingSenderId: "995815658511",
    appId: "1:995815658511:web:1fa4b76bb0590a698e3f7a"
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);
export const provider = new GoogleAuthProvider();
export const firestore = getFirestore(firebase);
export const storage = getStorage(firebase)

// console.log(new GoogleAuthProvider(firebase))

// firebase()
// if (!firebase.length) {
// }

if (firebase.location === "localhost") {

    firebase.firestore.settings({
        host: "localhost: 8080",
        ssl: false,
        experimentalForceLongPolling: true
    })
    firebase.functions().userFunctionsEmulator("http://localhost:5002");


}



// new firebase.auth.