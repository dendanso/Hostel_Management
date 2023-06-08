

//Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getAuth,signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALtCbW8aUvHd3MZqyR0riu1u0ZKqldraQ",
  authDomain: "hostel-management-47204.firebaseapp.com",
  projectId: "hostel-management-47204",
  storageBucket: "hostel-management-47204.appspot.com",
  messagingSenderId: "373666137125",
  appId: "1:373666137125:web:bac83eaf8b7caa7b4c2bcc",
  measurementId: "G-NT1L9396HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const hostel_signin = document.getElementById('hostel_signin')


const email_error_handle = document.querySelector('.signin_email')
const signin_error_handle= document.querySelector('.signin_password') 

const auth = getAuth();

hostel_signin.addEventListener('submit', (e)=>{
    const signin_email = document.getElementById('signin_email').value;
    const signin_password = document.querySelector('.signin_password').value; 

    
    e.preventDefault()
    signInWithEmailAndPassword(auth, signin_email, signin_password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
     

   location.replace('/database.html')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Incorrect usename or password")
    email_error_handle.style.borderBottom = "solid 1px red"
    signin_error_handle.style.borderBottom = "solid 1px red"

    console.log(errorMessage)
    console.log(errorCode)
  });
})
const create_account= document.getElementById('create_account')





