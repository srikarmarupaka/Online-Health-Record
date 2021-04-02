import firebase from "firebase"
// import firebase from "firebase/app"
// import "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_API_KEY,
  storageBucket: "online-health-record.appspot.com",
  messagingSenderId: "738971711420",
  appId: "1:738971711420:web:74a8ab0b1a6928f6429db9",
  measurementId: "G-RM5NFJ3B2G"
};
const app = firebase.initializeApp(firebaseConfig)