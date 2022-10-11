import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
initializeApp({
  apiKey: "AIzaSyCmteIa-2CXXG-fqEeLxppDCH9J5Lv5rnA",
  authDomain: "vue-fs-prod-7641b.firebaseapp.com",
  projectId: "vue-fs-prod-7641b",
});

export const db = getFirestore();
