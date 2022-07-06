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
  // A REVOIR POUR LE 'BODY' ERREUR 
  body.style.background = "block";
  chargement.style.display ="block"; }

  // ***************************************************

  let nomLangage = document.getElementById('nomLangage');
  let tapeName = document.querySelector('.tapeName');
  let boxJeu = document.querySelector('#boxJeu');
    
  tapeName.style.display= 'none';
    
  window.onload = setTimeout(showTape, 7000);
  
  function showTape(){
    tapeName.style.display= 'block'; }

// 
  
window.addEventListener('keydown', function(event){
  key = event.key
  console.log(key);
  if(key === event.key){
    nomLangage.focus()
    nomLangage.classList.remove('opacite');
  }
})

window.addEventListener('keyup', function(event){
  key = event.key
  console.log(key);
  if(key === event.key){
    nomLangage.focus()
    nomLangage.classList.remove('opacite');
  }
})


// Modale pour les langages trouvés
const modalContenair = document.querySelector(".modal-container"); 
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
  modalContainer.classList.toggle("active")}

  





  // function controle(){
  // let saisie= document.getElementById('nomLangage').value;
  // alert("Vous avez saisi : "+ saisie);
  
  // for(let i=0; i<tapeName.length; i++){
  //   let tapeClavier = tapeName[i];
  //   tapeClavier.addEventListener('click', showWrite, false);
  // }


