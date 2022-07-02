let title = document.querySelector("#title") ;
let wrapper = document.querySelector(".wrapper");
let display = document.querySelector(".display");
let body = document.querySelector("body");
let logo = document.querySelector('.logo-code');
let number = document.querySelector('.number');
let reference = document.querySelector('.reference');
let commerce = document.querySelector('.commencer');

 window.onload = setTimeout(showContent, 6000);

function showContent() {
  title.style.display = "none";
  wrapper.style.display = "none";
  body.style.background = "block";
  logo.style.display = "none";
  display.style.display = "block";
  number.style.display = "block";
  reference.style.display = "block";
  commerce.style.display = "block";

 }
// // 2eme section
// // display nouvelle page 


// //  let code = document.getElementById('code')
// //  window.setTimeout(()=>{
// //   code.style.display = "none" }, 6000)