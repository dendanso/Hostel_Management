//Angular Js Setup Starts Here

const app  = angular.module('App',['ngRoute','ngAnimate'])

//Angular Js Rousting Config Starts Here
app.config(function($routeProvider){
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
    )
    
})
//Angular Js Rousting Config Ends Here



app.controller('myController',function($scope,$location){

    const heading = document.querySelector('.heading')
    const number1 = document.querySelector('.number1')
    const number2 = document.querySelector('.number2')
    const number3 = document.querySelector('.number3')

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

    $scope.hostel_forms=()=>{
        const fname = document.querySelector('.fname').value
        const lname = document.querySelector('.lname').value
        const course = document.querySelector('.course').value
        const country=document.querySelector('.country1').value
        const basic_info_one_validation = fname==''&&lname==''&&course==''&&country==''
        const firstname = document.querySelector('.firstname')
        const lastname = document.querySelector('.lastname')
        const corse=document.querySelector('.corse')
        const contry=document.querySelector('.contry')

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
            alert('empty fields')
        }else{
            $location.path('/basic_info2')
            heading.textContent = "Basic Information"
    
            number1.style.backgroundColor = "black"
            number1.style.color = "white"
            number2.style.backgroundColor = "white"
            number2.style.color = "black"
            number3.style.backgroundColor = "white"
            number3.style.color = "black"

        }
    }


    $scope.hostel_forms1=()=>{
         const contact=document.querySelector('.contact').value
         const email=document.querySelector('.email').value
         const address=document.querySelector('.address').value
         const emergency=document.querySelector('.emergency').value
         const coninfo=document.querySelector('.coninfo').value
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


    }

    $scope.billing=()=>{
        
        const firstname11 = document.querySelector('.firstname11').value
        const lastname11 = document.querySelector('.lastname11').value
        const email11 = document.querySelector('.email11').value
        const country11 = document.querySelector('.country11').value
        const address11 = document.querySelector('.address11').value
        const phonenumber = document.querySelector('.phonenumber').value
        const basic_info_one_validation = firstname11==''&&lastname11==''&&email11==''&&address11==''&&phonenumber==''
        const first_name11 = document.querySelector('.first_name11')
        const last_name11 = document.querySelector('.last_name11')
        const email_address = document.querySelector('.email_address')
        const country12=document.querySelector('.country12')
        const address12 = document.querySelector('.address12')
        const phone_number = document.querySelector('.phone_number')

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
            $location.path('/basic_info2')
            heading.textContent = "Basic Information"
    
            number1.style.backgroundColor = "black"
            number1.style.color = "white"
            number2.style.backgroundColor = "white"
            number2.style.color = "black"
            number3.style.backgroundColor = "white"
            number3.style.color = "black"

        }
  
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




