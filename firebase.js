// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase'

// const firebaseConfig = {
//   apiKey: "AIzaSyBdASukTzCuuQXTkUiKlnVgLDfN6-ljUx8",
//   authDomain: "linkedin-e0be1.firebaseapp.com",
//   projectId: "linkedin-e0be1",
//   storageBucket: "linkedin-e0be1.appspot.com",
//   messagingSenderId: "230433105362",
//   appId: "1:230433105362:web:e2d22e8a36daf3c321540b",
//   measurementId: "G-TXG2CLQDN9"
// };
// const firebaseApp = firebase.initalizeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export {db,auth}


import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBdASukTzCuuQXTkUiKlnVgLDfN6-ljUx8",
  authDomain: "linkedin-e0be1.firebaseapp.com",
  projectId: "linkedin-e0be1",
  storageBucket: "linkedin-e0be1.appspot.com",
  messagingSenderId: "230433105362",
  appId: "1:230433105362:web:e2d22e8a36daf3c321540b",
  measurementId: "G-TXG2CLQDN9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };