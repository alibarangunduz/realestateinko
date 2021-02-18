import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVGQEKU-O4NI0gwliD47ks-E_UT62TZHQ",
  authDomain: "realestate-fbe82.firebaseapp.com",
  projectId: "realestate-fbe82",
  storageBucket: "realestate-fbe82.appspot.com",
  messagingSenderId: "496897253628",
  appId: "1:496897253628:web:540653e34151bcefd7f779",
  measurementId: "G-W6HP67GWL0",
};
const fire = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage();
export { auth, storage, fire };
