// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,

    /*  apiKey: "AIzaSyA6_yaI6DmiklFQhs9xXfpTwjSV6v_HRhc",
     authDomain: "doctors-portal-9503f.firebaseapp.com",
     projectId: "doctors-portal-9503f",
     storageBucket: "doctors-portal-9503f.appspot.com",
     messagingSenderId: "500247657667",
     appId: "1:500247657667:web:794e6052ef94f27c5eb676" */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;