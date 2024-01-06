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

// footer current year
window.addEventListener('load', (
    function () {
        document.getElementById('copyright-year').appendChild(
            document.createTextNode(
                new Date().getFullYear()
            )
        );
    }
));


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
//const myDropDown = document.getElementById("myDropDown-menu");
const navLinks = document.querySelectorAll('.dropdown-menu');
navLinks.forEach(links =>{
    if(links.href.includes(`${activePage}`)){
        links.classList.add('activate');
    }
})

//first home page carousel
const imageContainer = document.querySelector('.elipse-container');
const Images = document.querySelectorAll('.elipse-slid-images');
let imageWidth = 500; //Images[0].getBoundingClientRect;
let prevIndex;
let CurrentActiveImage = 0;
let totalImages = Images.length;

setInterval(function slideImages(){
    imageContainer.classList.add("sliding-transition");
    prevIndex = CurrentActiveImage;
    CurrentActiveImage = (CurrentActiveImage + 1) % totalImages;
    imageContainer.style.transform = `translateX(-${imageWidth}px)`;
    //imageContainer.style.transform = `translateX(${100 * ( - CurrentActiveImage)}px)`;

    setTimeout(() => {
        imageContainer.appendChild(Images[prevIndex]);
        imageContainer.classList.remove("sliding-transition");
        imageContainer.style.transform = "";
      }, 500);
}, 2000);




//  //geting scroll position of an element

//  function getPositionElem(){
    let Left = document.querySelector('.left');
    let dropPosition = document.querySelector("#myDropDown");

    window.addEventListener('scroll', function(){
        let scrollTop = window.scrollY; //scroll position
        let viewHeight =  window.innerHeight; // viewport height
        let contentHeight = dropPosition.getBoundingClientRect().height;

        if(scrollTop >= contentHeight - viewHeight){
            dropPosition.classList.add('sticky');
        }
        if(scrollTop <= dropPosition.offsetTop){
            dropPosition.classList.remove('sticky');
        }
        if(scrollTop > (dropPosition.offsetTop + dropPosition.offsetHeight + 3300)){// checked the offset bottom
            dropPosition.classList.remove('sticky');
        }
    })

//}

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





