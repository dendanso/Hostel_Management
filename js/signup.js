//Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getAuth,createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';

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



const auth = getAuth();



const first_name_error_handle = document.querySelector('.first_name')
const last_name_error_handle = document.querySelector('.last_name')
const email_signup_error_handle = document.querySelector('.email_signup')
const number_error_handle = document.querySelector('.number')
const passwords_error_handle = document.querySelector('.passwords')
const confirm_password_error_handle = document.querySelector('.confirm_password')
const createAccount = document.getElementById('createAccount');


createAccount.addEventListener('submit',(e)=>{
    e.preventDefault()




    var first_name_error_handle_value = document.querySelector('.first_name').value
    var last_name_error_handle_value = document.querySelector('.last_name').value
    var email_signup_error_handle_value = document.querySelector('.email_signup').value
    var number_error_handle_value = document.querySelector('.number').value
    var passwords_error_handle_value = document.querySelector('.passwords').value
    var confirm_password_error_handle_value = document.querySelector('.confirm_password').value

    var validation = first_name_error_handle_value == "" || last_name_error_handle_value == "" || email_signup_error_handle_value =="" || number_error_handle_value=="" || passwords_error_handle_value==""|| confirm_password_error_handle_value=="" 
    
    if(first_name_error_handle_value = " "){
        
        first_name_error_handle.style.borderBottom = "solid 1px red"
    }
    if(last_name_error_handle_value = " "){
        
        last_name_error_handle.style.borderBottom = "solid 1px red"
    }
    if(email_signup_error_handle_value = " "){
        
        email_signup_error_handle.style.borderBottom = "solid 1px red"
    }
    if(number_error_handle_value = " "){
        
        number_error_handle.style.borderBottom = "solid 1px red"
    }
    if(passwords_error_handle_value = " "){
        
        passwords_error_handle.style.borderBottom = "solid 1px red"
    }
    if(confirm_password_error_handle_value = " "){
        
        confirm_password_error_handle.style.borderBottom = "solid 1px red"
    }



    if(validation ){
        alert('Field is Empty or Passwords dont match. Please Review' )
    }else{
     

        createUserWithEmailAndPassword(auth, email_signup_error_handle.value, passwords_error_handle.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('Registration Complete!')
            location.replace('/admin_signIn.html')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..

            console.log(errorMessage)
        });
    }

})




