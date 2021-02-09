import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCcB9AB4B2hHYYLMTZez8pKEVlPvy82Bvk",
    authDomain: "mypass-project.firebaseapp.com",
    databaseURL: "https://mypass-project-default-rtdb.firebaseio.com",
    projectId: "mypass-project",
    storageBucket: "mypass-project.appspot.com",
    messagingSenderId: "729251897591",
    appId: "1:729251897591:web:4ae1e35acfc66b1e4433f2"
};
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
