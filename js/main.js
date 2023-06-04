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

    $scope.basic_info_two = ()=>{
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
    }

    $scope.billing_info = ()=>{
        $location.path('/billing_info')
        heading.textContent = "Payment Information"
        number2.style.backgroundColor = "white"
        number2.style.color = "black"
        number3.style.backgroundColor = "black"
        number3.style.color = "white"
    }
})


//Image Carousel Functions
const carouselTime = 3000;
const image_holder = document.querySelector('.image_holder')
const totalIndex = 1;
var index = 0;
var moveValue = 0;
var value = 200;

function imageCarousel(){
    if(index < totalIndex){
         
        moveValue +=value;
        image_holder.style.transform=`translateX(-${moveValue}px)`;
        index++;
    }else{
        
        moveValue=0;
        index=0;
        image_holder.style.transform=`translateX(-${moveValue}px)`;
    }
}

setInterval(imageCarousel,carouselTime)


//Image Carousel Functions Ends Here

//Gallery Functions Starts here

const galleryArray = [
    "https://images.unsplash.com/photo-1578898887155-72e9a7da1fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1577791465291-35b823edfeba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1578898887193-90f85d96cd7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"

]