const functions = require("firebase-functions");
const admin = require('firebase-admin')

admin.initializeApp();

const db = admin.firestore();

if (process.env.NODE_ENV !== 'production') {
    process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080'
}

exports.aggregatePosts = functions.firestore.document('posts/{postId').onCreate( async (snap, context) => {

    const postData = snap.data();
    
    const userRef = db.doc(`users/${postData.uid}`);
    const userData = (await userRef.get()).data();

    const currentTotal = (userData && userData.totalPosts) || 0;

    const totalPosts = currentTotal + 1;

    return userRef.set({ totalPosts }, { merge: true})



})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
