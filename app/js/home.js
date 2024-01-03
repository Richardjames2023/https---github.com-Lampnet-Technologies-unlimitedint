 console.log("hello world!");

// let elem = document.getElementById('check');

// let left = document.body.offsetWidth;
// elem.style.position="relative";
// //elem.style.left = left + "px";
// let mar = elem.offsetLeft;
// let interval = 3;

// var timer =  window.setInterval(() => {
//     elem.style.left = left + "px";
    
//     if(left - mar < 0){
//         left = 0;
//     }else{
//         left -= mar;
//     }
   
//     if(mar  > left){
//         setTimeout(timer);
//     }
// }, interval);
//  function timer(){

//     elem.style.left = left + "px";
    
//     if(left - mar > 0){
//         left = 0;
//         console.log(left);
//     }else{
//         left -= mar;
//         console.log(left);
//     }
//  }

//  function rev(){
   
//     if(left-mar > left ){
//         elem.style.left = left + "px";
//     }
//  }
 
//  setInterval( timer, rev, 3);
//  setInterval( rev, 4);

// checking textcontent

// let p = document.getElementById('des');
// let cutText = p.textContent;
// let finalString = cutText.substring(211, 0);

// console.log(cutText);

// alert(finalString);
 
//menu color changes on selections
const activeMenu = window.location.pathname;
const navMenus = document.querySelectorAll('.links');

navMenus.forEach(menu=>{
    if(menu.href.includes(`${activeMenu}`)){
        menu.classList.add('active');
    }
})

//sliding in and out of text
let heroTitle = document.querySelector('.hero-title');
let subTitle = document.querySelector('.check');

// let timer = setTimeout(function(){
//     heroTitle.classList.add('animate');
//     subTitle.classList.add('slidein');
// },600)


