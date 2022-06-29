let loading = document.querySelector("#title") ;
let wrapper = document.querySelector(".wrapper");
let display = document.querySelector("#display");
let body = document.querySelector("body");
let para = document.queryCommandValue("p");


window.onload = setTimeout(showContent, 6000);

function showContent() {
  loading.style.display = "none";
  wrapper.style.display = "none";
  // nouvelle page apparait
  display.style.display = "block";
  display
  body.style.background = "block";
    para.style.display = "block";

}
let logo = document.querySelector('.logo-code');
let legales = document.querySelector('.legales');
let politique = document.querySelector('.politque');

window.onload = setTimeout(showContent1, 6000);

function showContent1() {
  logo.style.display = "none";
  legales.style.display = "block";
  politique.style.display = 'block';

}
let code = document.getElementById('code')

window.setTimeout(()=>{
  code.style.display = "none"
}, 6000)