import firebase from "firebase";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {};
const fire = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage();
export { auth, storage, fire };
