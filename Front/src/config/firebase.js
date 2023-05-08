import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDTApTNhoNifkposqnHRMNFRYzRMcxnl2w",
  authDomain: "rerworkpe.firebaseapp.com",
  projectId: "rerworkpe",
  storageBucket: "rerworkpe.appspot.com",
  messagingSenderId: "425868164868",
  appId: "1:425868164868:web:ce11c64901bc94fce45a51",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();
export const db = getFirestore(app);
