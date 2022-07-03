let title = document.querySelector("#title") ;
let wrapper = document.querySelector(".wrapper");
let boxchargement = document.querySelector("#boxChargement");
let loader= document.querySelector("#loader");
let logo = document.querySelector('.logo-code');
let chargement = document.querySelector('.chargement');

window.onload = setTimeout(showContent, 6000);

function showContent() {
  logo.style.display = "none";
  title.style.display = "none";
  wrapper.style.display = "none";
  // nouvelle page apparait
  loader.style.display = "none";
  boxchargement.style.display = "block";
  body.style.background = "block";
  chargement.style.display ="block";
}




// //  let code = document.getElementById('code')
// //  window.setTimeout(()=>{
// //   code.style.display = "none" }, 6000)