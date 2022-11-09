1: api key
c23b09795a379312376e2c8a555343e0;


2: api requiest
https://api.themoviedb.org/3/movie/550?api_key=c23b09795a379312376e2c8a555343e0


3: acces token
eyJhbGciOiJIUzI1NiJ9eyJhdWQiOiJjMjNiMDk3OTVhMzc5MzEyMzc2ZTJjOGE1NTUzNDNlMCIsInN1YiI6IjYzNjlhZjhhNjkzZTIwMDA3ZjdlYmNhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ
  .m2p0BLKGJA6fXBf_DqS9Drfl2AnSg7AauCFLeCFynlg;


// 4: firebase option (we not use this);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJkyLDoKzANdqx5b7SbBjMUnOH23suRJk",
  authDomain: "netflix-clone-cebbc.firebaseapp.com",
  projectId: "netflix-clone-cebbc",
  storageBucket: "netflix-clone-cebbc.appspot.com",
  messagingSenderId: "724102652523",
  appId: "1:724102652523:web:b57b258f8754913057472e",
  measurementId: "G-1K37EFV79S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);