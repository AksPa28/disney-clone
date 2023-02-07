import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWdf-tYgWUgFQ7PusgOQ6Z7onGTFZXVZ0",
  authDomain: "aks-disney-clone-bb9e6.firebaseapp.com",
  projectId: "aks-disney-clone-bb9e6",
  storageBucket: "aks-disney-clone-bb9e6.appspot.com",
  messagingSenderId: "482213365377",
  appId: "1:482213365377:web:514043701689dba6762f80",
  measurementId: "G-E2Z6HMWP6S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
