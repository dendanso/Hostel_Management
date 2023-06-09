//Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getFirestore,collection,doc, getDocs } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

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
const db = getFirestore(app);

const docRef = await getDocs(collection(db, "bookings"));
const booking_whiteboard = document.querySelector('.booking_whiteboard')
const view_page_container = document.querySelector('.view_page_container')
const header_name = document.querySelector('.header_flex1 h1')

const firstName = document.querySelector('.fname');
const lastName = document.querySelector('.lname');
const gender = document.querySelector('.gender');
const country = document.querySelector('.country');
const course = document.querySelector('.course');
const level = document.querySelector('.level');
const email = document.querySelector('.email');
const contact = document.querySelector('.contact');

const eName = document.querySelector('.ename');
const eContact = document.querySelector('.econtact');
const existing = document.querySelector('.existing');


const room_select = document.querySelector('.room_select');
const floor_select = document.querySelector('.floor_select');
const roomates = document.querySelector('.roomates');


const pay_option = document.querySelector('.pay_option');
const pay_mode = document.querySelector('.pay_mode');
const bill_info = document.querySelector('.bill_info');



async function getData(){


docRef.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());

    const names_template = `
    <div class="booked_names">${doc.data().first_name}</div>
    `

    booking_whiteboard.innerHTML += names_template;
    header_name.innerHTML = doc.data().first_name + " " + doc.data().last_name;
    firstName.innerHTML = doc.data().first_name
    lastName.innerHTML = doc.data().last_name
    gender.innerHTML = doc.data().gender;
    country.innerHTML = doc.data().country
    course.innerHTML = doc.data().course_of_study
    level.innerHTML= doc.data().level_of_study
    email.innerHTML = doc.data().email
    contact.innerHTML = doc.data().contact

    eName.innerHTML = doc.data().emergency
    eContact.innerHTML = doc.data().contact_info
    existing.innerHTML = doc.data().medical_condition
    
    room_select.innerHTML = doc.data().room_type
    floor_select.innerHTML = doc.data().floor_select
    room_select.innerHTML = doc.data().room_number
    roomates.innerHTML = doc.data().roomates
    pay_option.innerHTML = doc.data().make_payment
    pay_mode.innerHTML = doc.data().momo
    bill_info.innerHTML = doc.data().billing_info
  });


}

getData()