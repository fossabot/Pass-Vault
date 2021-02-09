import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCcB9AB4B2hHYYLMTZez8pKEVlPvy82Bvk",
  authDomain: "mypass-project.firebaseapp.com",
  databaseURL: "https://mypass-project-default-rtdb.firebaseio.com",
  projectId: "mypass-project",
  storageBucket: "mypass-project.appspot.com",
  messagingSenderId: "729251897591",
  appId: "1:729251897591:web:4ae1e35acfc66b1e4433f2"
};

firebase.initializeApp(firebaseConfig);

const fbAuth = firebase.auth();
const providerAuth = firebase.auth;
const db = firebase.database();

const getProviderForProviderId = method => {
  let provider = null;
  switch (method) {
    case "google.com":
      provider = new providerAuth.GoogleAuthProvider();
      provider.addScope("openid");
      provider.addScope("profile");
      provider.addScope("email");
      break;
    case "facebook.com":
      provider = new providerAuth.FacebookAuthProvider();
      provider.addScope("email");
      provider.setCustomParameters({
        display: "popup"
      });
      break;
    case "github.com":
      provider = new firebase.auth.GithubAuthProvider();
      provider.addScope("user:email");
      provider.addScope("read:user");
      break;
  }
  return provider;
};

export { fbAuth, providerAuth, getProviderForProviderId, db };
