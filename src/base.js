import Rebase from "re-base";
import firebase from "firebase";
import firebaseConfig from "./config/firebase-config.json";

// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "store-picker.firebaseapp.com",
//   databaseURL: "https://store-picker.firebaseio.com",
//   projectId: "store-picker"
// };

export const firebaseApp = firebase.initializeApp(firebaseConfig);

const base = Rebase.createClass(firebaseApp.database());

export default base;
