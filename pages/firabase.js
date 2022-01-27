// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPl-zXvWVv7XnnZINL1rZ_e2YdvQTBn6U",
  authDomain: "ders2-3d565.firebaseapp.com",
  projectId: "ders2-3d565",
  storageBucket: "ders2-3d565.appspot.com",
  messagingSenderId: "282269509659",
  appId: "1:282269509659:web:1f3905f99093b9abbf70be"
};
 
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app;
}
 
const auth = firebase.auth();
const fireStore = firebase.firestore();
 
export { auth , fireStore};


