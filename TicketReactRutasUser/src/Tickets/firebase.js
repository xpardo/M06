// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqBs4wDbury_AHvSpoUo774Qa1SXE64Mk",
  authDomain: "tickets-124f2.firebaseapp.com",
  databaseURL: "https://tickets-124f2-default-rtdb.firebaseio.com",
  projectId: "tickets-124f2",
  storageBucket: "tickets-124f2.appspot.com",
  messagingSenderId: "241781947380",
  appId: "1:241781947380:web:cb6fcdfbb6491880c457a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }