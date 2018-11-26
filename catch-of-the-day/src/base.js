import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBhUgEhjZWyE6BkIknTV8LKH8x1zNAwb-Y",
  authDomain: "catch-of-the-day-nelson-foltz.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-nelson-foltz.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;
