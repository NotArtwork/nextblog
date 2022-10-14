import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAZQVqwAYN8Dak941Zvbpr3AmVLo8mKN4U",
    authDomain: "next-blog-12963.firebaseapp.com",
    projectId: "next-blog-12963",
    storageBucket: "next-blog-12963.appspot.com",
    messagingSenderId: "995815658511",
    appId: "1:995815658511:web:1fa4b76bb0590a698e3f7a"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

if (location.hostname === "localhost") {

    firebase.firestore.settings({
        host: "localhost: 8080",
        ssl: false,
        experimentalForceLongPolling: true
    })
    firebase.functions().userFunctionsEmulator("http://localhost:5002");


}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

