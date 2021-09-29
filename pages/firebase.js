import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwW6Xt6CAlEzs4wNN7jK8-EdQQpyxMXu8",
  authDomain: "gradient-deck.firebaseapp.com",
  projectId: "gradient-deck",
  storageBucket: "gradient-deck.appspot.com",
  messagingSenderId: "744076099622",
  appId: "1:744076099622:web:4cfa0b90677c13edb6e6e7",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default getFirestore(app);
