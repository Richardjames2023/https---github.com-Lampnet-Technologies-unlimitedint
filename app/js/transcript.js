//rigistrion popup form
const register = document.querySelector('#register');
const formContainer = document.querySelector('#form-container');
const closeBtn = document.querySelector('.close-btn');
const PopupForm = document.querySelector('.popup-form');

register.addEventListener("click", function(){
    if(formContainer.classList.contains('openRegistration')){
        formContainer.classList.remove('openRegistration');
        PopupForm.classList.remove('popupActive');
    }else{
        formContainer.classList.add('openRegistration');
        PopupForm.classList.add('popupActive');
    }
})

//slect between the two

let currentImage = 0;
let dateDay = document.querySelectorAll('.date-day');
for(let i = 0; i < dateDay.length; i++){
    dateDay[i].addEventListener("click", ()=>{
        if(dateDay[i].classList.contains('active')){
            dateDay[i].classList.remove('active');
        }
        currentImage = (currentImage + 1) % dateDay.length;
        
        dateDay[currentImage].classList.add("active");

    })
}