import Rebase from "re-base";
import firebase from "firebase";

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDSpb_V0Y0vrTwGmqzAKpx4JTWGuBnxg_o",
  authDomain: "store-picker.firebaseapp.com",
  databaseURL: "https://store-picker.firebaseio.com",
  projectId: "store-picker"
});

const base = Rebase.createClass(firebaseApp.database());

export default base;
