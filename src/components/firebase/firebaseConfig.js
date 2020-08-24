import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCL4opeeOK9d7MbI6YMuPKITK7LxnCm6Wc",
    authDomain: "react-app-cursos-f8c3d.firebaseapp.com",
    databaseURL: "https://react-app-cursos-f8c3d.firebaseio.com",
    projectId: "react-app-cursos-f8c3d",
    storageBucket: "react-app-cursos-f8c3d.appspot.com",
    messagingSenderId: "739177552680",
    appId: "1:739177552680:web:c7ed58b927d6ee81b20e1d"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }