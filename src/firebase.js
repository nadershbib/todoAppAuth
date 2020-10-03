import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyCdKK91qDdv8R0_1ryzO29bcLQmw6hKTG4",
    authDomain: "todoappauth-7acab.firebaseapp.com",
    databaseURL: "https://todoappauth-7acab.firebaseio.com",
    projectId: "todoappauth-7acab",
    storageBucket: "todoappauth-7acab.appspot.com",
    messagingSenderId: "946758342439",
    appId: "1:946758342439:web:d9a3bafa73836c56437b02",
    measurementId: "G-7744FNBL61"
  };


  
  const fire = firebase.initializeApp(firebaseConfig);

  const db = fire.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
 
  export default db;
  export {auth,provider};