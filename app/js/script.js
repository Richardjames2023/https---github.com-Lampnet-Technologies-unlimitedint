// //mobile menu open
const hamburgerBtn = document.querySelector('#hamburgerMenu');
const body = document.querySelector('body');
const header = document.querySelector('.header');
//const overlay = document.querySelector('.menu-overlay');
const fadeElems = document.querySelectorAll('.has-fade');
hamburgerBtn.addEventListener("click", function(){
    if(header.classList.contains('open')){ // close the hamburger menu
        header.classList.remove('open');
        body.classList.add('no-scroll');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
    }else{ // open the hamburger menu
        header.classList.add('open');
        body.classList.add('no-scroll');
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        })
    }
})

//Appoiment form display
const Appointment = document.querySelector('#appointment');
const Popup = document.querySelector('#popup');

Appointment.addEventListener("click", function(){
    if(Popup.classList.contains('appointmentActive')){
        Popup.classList.remove('appointmentActive');
    }else{
        Popup.classList.add('appointmentActive');  
    }
})


// //fading opacity slider
let imgs = document.querySelectorAll(".slider img");
let currentImg = 0;
let interval = 4000;

function changeSlide(){
    for(let i = 0; i<imgs.length; i++){
       imgs[i].style.opacity= 0;

    }

    currentImg = (currentImg + 1) % imgs.length;

    imgs[currentImg].style.opacity = 1;
}

 let timer = setInterval(changeSlide, interval);



//sidebar menu selection
const activePage = window.location.pathname;
const myDropDown = document.getElementById("myDropDown");
const navLinks = myDropDown.querySelectorAll('.mydropdown');

navLinks.forEach(link =>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('activate');
    }
})

 //geting scroll position of an element
window.onscroll = function(){getPositionElem()}


 function getPositionElem(){
     
    let mChange = document.querySelector("#myDropDown");
    let sticky = mChange.offsetTop;

    if(window.pageYOffset >= sticky){
        mChange.classList.add('sticky');
    }
    else{
        mChange.classList.remove('sticky');
    }
}

// //carousel image slider
const images = document.querySelectorAll('.slide-item');
const prev = document.querySelector(' .prev');
const next = document.querySelector(' .next');
let currentIndex = 0;
let maxSlide = images.length - 1;

next.addEventListener("click", function(){
     //currentIndex++;
    if(currentIndex == maxSlide){
        currentIndex = 0;
    }else{
        currentIndex++; 
    }

    images.forEach((image, indx )=>{
        image.style.transform =`translateX(${10 * (indx - currentIndex)}px)`;
    })
})
prev.addEventListener("click", function(){
     //currentIndex++;
    if(currentIndex == 0){
        currentIndex = maxSlide;
    }else{
        currentIndex--; 
    }

    images.forEach((image, indx )=>{
        image.style.transform =`translateX(${10 * (indx - currentIndex)}px)`;
    })
})






