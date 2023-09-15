import Rebase from "@re-base";
import firebase from "@firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJ_Bjgm_iijMep_1wJJr8qSLvVx2LggQQ",
  authDomain: "draft-day-app.firebaseapp.com",
  projectId: "draft-day-app",
  storageBucket: "draft-day-app.appspot.com",
  messagingSenderId: "398348811905",
  appId: "1:398348811905:web:cc04717de6f2c9ae62d780",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
