import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDL_QvOS07dmh60mJ8KaAzWicyhJ5NqZlo",
  authDomain: "first-time-ever-firebase.firebaseapp.com",
  projectId: "first-time-ever-firebase",
  storageBucket: "first-time-ever-firebase.appspot.com",
  messagingSenderId: "329137340928",
  appId: "1:329137340928:web:4f4216d8bce1221ec74ee5",
};

const app = initializeApp(firebaseConfig);

export { app };
