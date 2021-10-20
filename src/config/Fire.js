import firebase from 'firebase'
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyApduPlh7U0jfHJl_6pFVLuIEhK60uMnZw",
    authDomain: "airy-rock-295108.firebaseapp.com",
    databaseURL: "https://airy-rock-295108.firebaseio.com",
    projectId: "airy-rock-295108",
    storageBucket: "airy-rock-295108.appspot.com",
    messagingSenderId: "743381297312",
    appId: "1:743381297312:web:9e91b10f6e275cd84cc1c5",
    measurementId: "G-5QBNJH4K7L"
};

firebase.initializeApp(firebaseConfig);
export default firebase;