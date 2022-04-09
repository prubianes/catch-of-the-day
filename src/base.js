import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDRZlpS7LT2HnTxeHlw4ASa4YIpAMEOG2Y",
    authDomain: "catchofthedaypablo.firebaseapp.com",
    projectId: "catchofthedaypablo",
    storageBucket: "catchofthedaypablo.appspot.com",
    messagingSenderId: "455666850137",
    appId: "1:455666850137:web:de15926ba2902f71a5d448",
    measurementId: "G-5RTZWT9D2J"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;