import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD4w3oGVFQpLdpj_SPWsFgBT5fBiO_UxtQ",
  authDomain: "vue-test-56ef7.firebaseapp.com",
  databaseURL: "https://vue-test-56ef7.firebaseio.com",
  projectId: "vue-test-56ef7",
  storageBucket: "vue-test-56ef7.appspot.com",
  messagingSenderId: "815553935251",
  appId: "1:815553935251:web:e590e659e3f690baa3da66"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();