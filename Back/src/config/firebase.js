const { initializeApp } = require("firebase/app");
const { getAuth, GoogleAuthProvider } = require("firebase/auth");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDTApTNhoNifkposqnHRMNFRYzRMcxnl2w",
  authDomain: "rerworkpe.firebaseapp.com",
  projectId: "rerworkpe",
  storageBucket: "rerworkpe.appspot.com",
  messagingSenderId: "425868164868",
  appId: "1:425868164868:web:ce11c64901bc94fce45a51",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();
const db = getFirestore(app);

module.exports = {
  auth,
  googleprovider,
  db,
};
