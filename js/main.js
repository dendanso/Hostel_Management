//Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";
import { getFirestore,doc,setDoc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

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

//Angular Js Setup Starts Here

const angular_app  = angular.module('App',['ngRoute','ngAnimate'])

//Angular Js Rousting Config Starts Here
angular_app.config(function($routeProvider){
    $routeProvider
    .when(
        '/',{
            templateUrl:'basic_info.html',
            controller:'myController'
        }
    )
    .when(
        '/basic_info2',{
            templateUrl:'basic_info_2.html',
            controller:'myController'
        }
    )
    .when(
        '/booking_info',{
            templateUrl:'booking_info.html',
            controller:'myController'
        }
    )
    .when(
        '/billing_info',{
            templateUrl:'billing_info.html',
            controller:'myController'
        }
    ) .when(
        '/complete',{
            templateUrl:'form_complete.html',
            controller:'myController'
        }
    )
    
})
//Angular Js Rousting Config Ends Here



angular_app.controller('myController',function($scope,$location){

    const heading = document.querySelector('.heading')
    const number1 = document.querySelector('.number1')
    const number2 = document.querySelector('.number2')
    const number3 = document.querySelector('.number3')
    const sub_heading = document.querySelector('.sub_heading')
    const button_yes = document.querySelector('.button_yes');
    const button_no = document.querySelector('.button_no');
    const male = document.querySelector('.male');
    const female = document.querySelector('.female');
    const undergradute = document.querySelector('.undergrad')
    const postgraduate = document.querySelector('.postgraduate')
    const roomate_yes = document.querySelector('.roomate_yes');
    const roomate_no = document.querySelector('.roomate_no')
    var client_name = localStorage.getItem('client_name')

    $scope.basic_info_one = ()=>{
        $location.path('/')
        
    }

    /*$scope.basic_info_two = ()=>{
        $location.path('/basic_info2')
        heading.textContent = "Basic Information"

        number1.style.backgroundColor = "black"
        number1.style.color = "white"
        number2.style.backgroundColor = "white"
        number2.style.color = "black"
        number3.style.backgroundColor = "white"
        number3.style.color = "black"
        
    }

    $scope.booking_info = ()=>{
        $location.path('/booking_info')
        heading.textContent = "Booking Information"

        number1.style.backgroundColor = "white"
        number1.style.color = "black"
        number2.style.backgroundColor = "black"
        number2.style.color = "white"
        number3.style.backgroundColor = "white"
        number3.style.color = "black"
    }*/

   /* $scope.billing_info = ()=>{
        $location.path('/billing_info')
        heading.textContent = "Payment Information"
        number2.style.backgroundColor = "white"
        number2.style.color = "black"
        number3.style.backgroundColor = "black"
        number3.style.color = "white"
    }*/

    $scope.hostel_forms=($event)=>{
        $event.preventDefault()
        const fname = document.querySelector('.fname').value
        const lname = document.querySelector('.lname').value
        const course = document.querySelector('.course').value
        const country=document.querySelector('.country1').value
        const basic_info_one_validation = fname==''|| lname==''|| course==''|| country==''
        const firstname = document.querySelector('.firstname')
        const lastname = document.querySelector('.lastname')
        const corse=document.querySelector('.corse')
        const contry=document.querySelector('.contry')
        const roomate_yes = document.querySelector('.roomate_yes')
        const roomate_no = document.querySelector('.roomate_no')

        if(fname==''){
            firstname.style.color="red"
        }
        if(lname==''){
            lastname.style.color="red"
        }
        if(course==''){
            corse.style.color="red"
        }
        if(country==''){
            contry.style.color="red"
        }
        
        if(basic_info_one_validation){
            alert('Field empty. Kindly Review')
        }else{

            async function addBasic (){
                // Add a new document in collection "cities"
                await setDoc(doc(db, "bookings", fname), {
                    first_name: fname,
                    last_name: lname,
                    country: country,
                    course_of_study:course,
                    gender:localStorage.getItem("key"),
                    level_of_study:localStorage.getItem('key3')
                    
                });
            }

            addBasic()

            $location.path('/basic_info2')
            heading.textContent = "Basic Information"
    
            number1.style.backgroundColor = "black"
            number1.style.color = "white"
            number2.style.backgroundColor = "white"
            number2.style.color = "black"
            number3.style.backgroundColor = "white"
            number3.style.color = "black"

        }

        localStorage.setItem('client_name',fname)
    }

    /*$scope.complete_form = ()=>{
        heading.textContent = "Registration Complete"
        sub_heading.style.display = 'none'
        $location.path('/complete')
    }*/

    $scope.male=()=>{
       
        button_yes.style.backgroundColor = "black";
        button_yes.style.color="white";

        button_no.style.backgroundColor = "white";
        button_no.style.color="black";

       localStorage.setItem('key',male.textContent)
       console.log(male.textContent)
       
    }

    $scope.female=()=>{

        button_yes.style.backgroundColor = "white";
        button_yes.style.color="black"

        button_no.style.backgroundColor = "black";
        button_no.style.color="white"
        
        localStorage.setItem('key',female.textContent)
        console.log(female.textContent)
    }

    $scope.undergraduate = ()=>{
        undergradute.style.backgroundColor = "black";
        undergradute.style.color = "white"

        postgraduate.style.backgroundColor = "white";
        postgraduate.style.color = "black"

        localStorage.setItem('key3',undergradute.textContent)
    }

    $scope.postgraduate = ()=>{
        undergradute.style.backgroundColor = "white";
        undergradute.style.color = "black"

        postgraduate.style.backgroundColor = "black";
        postgraduate.style.color = "white"

        localStorage.setItem('key3',postgraduate.textContent)
    }

    $scope.roomate_yes = ()=>{
        roomate_yes.style.backgroundColor = 'black';
        roomate_yes.style.color="white";

        roomate_no.style.backgroundColor = 'white';
        roomate_no.style.color= 'black'
        
        console.log(roomate_yes.textContent)
        localStorage.setItem('yes',roomate_yes.textContent)
    }

    $scope.roomate_no = ()=>{
        roomate_yes.style.backgroundColor = 'white';
        roomate_yes.style.color="black";

        roomate_no.style.backgroundColor = 'black';
        roomate_no.style.color= 'white'

        console.log(roomate_no.textContent)
        localStorage.setItem('yes',roomate_no.textContent)
    }

    $scope.hostel_forms1=($event)=>{
        $event.preventDefault();
         const contact=document.querySelector('.contact').value
         const email=document.querySelector('.email').value
         const address=document.querySelector('.address').value
         const emergency=document.querySelector('.emergency').value
         const coninfo=document.querySelector('.coninfo').value
         const medical_condition=document.querySelector('.medical_condition').value
         const basic_info_main_validation1 = contact==''&&email==''&&address==''&&emergency==''&&coninfo==''
         const contact1=document.querySelector('.contact1')
         const email1=document.querySelector('.email1')
         const address1=document.querySelector('.address1')
         const emergency1=document.querySelector('.emergency1')
         const coninfo1=document.querySelector('.coninfo1')
         
         if(contact==''){
            contact1.style.color="red"
         }
         if(email==''){
            email1.style.color="red"
         }
         if(address==''){
            address1.style.color="red"
         }
         if(emergency==''){
            emergency1.style.color="red"
         }
         if(coninfo==''){
            coninfo1.style.color="red"
         }
         if(basic_info_main_validation1){
            alert('empty fields')
         }else{
            $location.path('/booking_info')
        heading.textContent = "Booking Information"

        number1.style.backgroundColor = "white"
        number1.style.color = "black"
        number2.style.backgroundColor = "black"
        number2.style.color = "white"
        number3.style.backgroundColor = "white"
        number3.style.color = "black"
         }

        async function basicInfoTwo(){
            const bookingUpdate = doc(db, "bookings", client_name)

            await updateDoc(bookingUpdate, {
                contact:contact,
                email:email,
                address:address,
                emergency:emergency,
                contact_info:coninfo,
                medical_condition:medical_condition
              });
        }

        basicInfoTwo()
        console.log(client_name)
    }

    

    $scope.bookingForm = ($event)=>{
        $event.preventDefault()
        //var gender_check = document.querySelector('input[name="room"]:checked')
        var floor_element = document.getElementById('hostel_floors');
        var hostel_room = document.getElementById('hostel_room');
        var room_number = hostel_room.value;
        var floor_number = floor_element.value;
        var room_type_value = document.querySelector('input[name="room"]:checked');
    
        const room_1 = document.getElementById('room_1')
        const room_2 = document.getElementById('room_2')
        const room_3 = document.getElementById('room_3')
        const radio_validation = !room_1.checked && !room_2.checked && !room_3.checked;
        var validation = radio_validation

        if(radio_validation){
            const select_room = document.querySelector('.select_room')
            select_room.style.color = 'red';
        }

        function onChange() {
            
            console.log(floor_number);
            console.log(room_number);
            bookingInfo()
        }
       
        floor_element.onchange = onChange;
        hostel_room.onchange = onChange;
        onChange();

        async function bookingInfo(){
            const bookingUpdate = doc(db, "bookings", client_name)
            
            if(validation){
                alert('Pleae select a room ')
            }else{
                /*const roomate1_name = document.querySelector('.roomate1_name')
                const roomate1_contact = document.querySelector('.roomate1_contact')
                const roomate2_name = document.querySelector('.roomate2_name')
                const roomate2_contact = document.querySelector('.roomate2_contact')*/
                $location.path('/billing_info')
                heading.textContent = "Payment Information"
                number2.style.backgroundColor = "white"
                number2.style.color = "black"
                number3.style.backgroundColor = "black"
                number3.style.color = "white"

                await updateDoc(bookingUpdate, {
                    room_type:room_type_value.value,
                    floor:floor_number,
                    room_number:room_number,
                    roomate:localStorage.getItem('yes'),
                   /* roomate1_name: document.querySelector('.rommate1_name').value,
                    roomate1_contact:document.querySelector('.roomate1_contact').value,
                    roomate2_name:document.querySelector('.roomate2_name').value,
                    roomate2_contact:document.querySelector('.roomate2_contact').value,*/
                  });

                   
            }

          
        }  
      
    }



    $scope.billing=($event)=>{
        $event.preventDefault()
        const firstname11 = document.querySelector('.firstname11').value
        const lastname11 = document.querySelector('.lastname11').value
        const email11 = document.querySelector('.email11').value
        const country11 = document.querySelector('.country11').value
        const address11 = document.querySelector('.address11').value
        const phonenumber = document.querySelector('.phonenumber').value
        const basic_info_one_validation = firstname11==''|| lastname11==''|| email11=='' || address11==''|| phonenumber==''
        const first_name11 = document.querySelector('.first_name11')
        const last_name11 = document.querySelector('.last_name11')
        const email_address = document.querySelector('.email_address')
        const country12=document.querySelector('.country12')
        const address12 = document.querySelector('.address12')
        const phone_number = document.querySelector('.phone_number')
        const payment = document.querySelector('input[name="payment"]:checked')
        const momo = document.querySelector('input[name="momo"]:checked')
        const replicate = document.querySelector('input[name="replicate"]:checked')
        

        if(firstname11==''){
            first_name11.style.color="red"
        }
        if(lastname11==''){
            last_name11.style.color="red"
        }
       
        if(email11==''){
            email_address.style.color="red"
        }
        if(country11==''){
            country12.style.color="red"
        }
        if(address11==''){
            address12.style.color="red"
        }
        if(phonenumber==''){
            phone_number.style.color="red"
        }
        
        
        if(basic_info_one_validation){
            alert('empty fields')
        }else{
            
            async function postBilling(){
                const bookingUpdate = doc(db, "bookings", client_name)
                await updateDoc(bookingUpdate, {
                    make_payemnt:payment.value,
                    momo:momo.value,
                    billing_info:replicate.value
           
                });
               }
        
               postBilling()

            heading.textContent = "Registration Complete"
            sub_heading.style.display = 'none'
            $location.path('/complete')

        }

       
       
        
  
    }

    $scope.replicate = ()=>{
        const replicate = document.getElementById('replicate');
        var billing_firstname = document.getElementById('billing_firstname')
        var billing_email = document.getElementById('billing_email')
        var billing_address = document.getElementById('billing_address')
        var billing_lastname = document.getElementById('billing_lastname')
        var billing_country = document.getElementById('billing_country')
        var billing_number = document.getElementById('billing_number')

        if(replicate.checked){
            const docRef = doc(db, "bookings", client_name);

            async function getData(){
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {

            console.log("Document data:", docSnap.data().first_name);
            billing_firstname.setAttribute('value', docSnap.data().first_name)
            billing_email.setAttribute('value', docSnap.data().email)
            billing_lastname.setAttribute('value', docSnap.data().last_name)
            billing_country.setAttribute('value', docSnap.data().country)
            billing_number.setAttribute('value', docSnap.data().contact)
            billing_address.setAttribute('value', docSnap.data().address)
            } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            }
            }

            getData()
            
        }
    }

    const momo_number = document.querySelector('.momo_number');
    const voda_cash = document.querySelector('.voda_cash');
    const tigo_wallet = document.querySelector('.tigo_wallet');
    const bank = document.querySelector('.bank');


    $scope.mtnMomo = ()=>{
      momo_number.style.display = "block"
      voda_cash.style.display = "none"
      tigo_wallet.style.display = "none"
      bank.style.display = "none"
    }
    

    $scope.vodaCash = ()=>{
      voda_cash.style.display = "block"
      momo_number.style.display = "none"
      tigo_wallet.style.display = "none"
      bank.style.display = "none"
    }
   
    $scope.tigoWallet = ()=>{
      tigo_wallet.style.display = "block"
      momo_number.style.display = "none"
      voda_cash.style.display = "none"
      bank.style.display = "none" 

    }
    

    $scope.bankTransfer = ()=>{
      bank.style.display = "block"
      momo_number.style.display = "none"
      voda_cash.style.display = "none"
      tigo_wallet.style.display = "none"
    }
  
        
})


//Image Carousel Functions

const carouselTime = 3000;
const image_holder = document.querySelector('.image_holder')
const totalIndex = 1;
const circle_1 = document.querySelector('.circle_1')
const circle_2 = document.querySelector('.circle_2')
var index = 0;
var moveValue = 0;
var value = 200;

function imageCarousel(){
    if(index < totalIndex){
         
        moveValue +=value;
        image_holder.style.transform=`translateX(-${moveValue}px)`;
        index++;

        circle_1.style.backgroundColor = "white"
        circle_2.style.backgroundColor = "black"
    }else{
        
        moveValue=0;
        index=0;
        image_holder.style.transform=`translateX(-${moveValue}px)`;

        circle_1.style.backgroundColor = "black"
        circle_2.style.backgroundColor = "white"
    }
}

setInterval(imageCarousel,carouselTime)

//Image Carousel Functions Ends Here

//Gallery Functions Starts here
const gallery = document.querySelector('.gallery')
const gallery_img = document.querySelector('.gallery img')
var gallery_count =0;
const gallery_image1= document.querySelector('.image1')
const gallery_image2= document.querySelector('.image2')
const gallery_image3= document.querySelector('.image3')
const close = gallery.querySelector('.close')
const arrow_left = gallery.querySelector('.arrow_left')
const arrow_right = gallery.querySelector('.arrow_right')

const galleryArray = [
    "https://images.unsplash.com/photo-1578898887155-72e9a7da1fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1577791465291-35b823edfeba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1578898887193-90f85d96cd7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"

]

gallery_image1.addEventListener('click',()=>{
    gallery.style.display = "grid"
    gallery_img.setAttribute('src',galleryArray[0])
})
gallery_image2.addEventListener('click',()=>{
    gallery.style.display = "grid"
    gallery_img.setAttribute('src',galleryArray[1])
})

gallery_image3.addEventListener('click',()=>{
    gallery.style.display = "grid"
    gallery_img.setAttribute('src',galleryArray[2])
})

close.addEventListener('click',()=>{
    gallery.style.display = "none"
})

arrow_right.addEventListener('click',()=>{
    if(gallery_count < 2){
        gallery_count++;
        gallery_img.setAttribute('src',galleryArray[gallery_count]);

    }
    console.log(gallery_count)
})

arrow_left.addEventListener('click',()=>{
    
    if(gallery_count > 0  && gallery_count <= 2){
        gallery_count--;
        gallery_img.setAttribute('src',galleryArray[gallery_count]);
   
        console.log(gallery_count)
    }
   
})

//Gallery Functions Ends here




