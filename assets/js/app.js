let title = document.querySelector("#title");
let wrapper = document.querySelector(".wrapper");
let boxchargement = document.querySelector("#boxChargement");
let loader = document.querySelector("#loader");
let logo = document.querySelector(".logo-code");
let chargement = document.querySelector(".chargement");

window.onload = setTimeout(showContent, 6000);

function showContent() {
  logo.style.display = "none";
  title.style.display = "none";
  wrapper.style.display = "none";
  loader.style.display = "none";
  // nouvelle page apparait
  boxchargement.style.display = "block";
}

// ***************************************************

let boxTape = document.getElementById("boxTape");
// nomLangage coorespont au input
let nomLangage = document.getElementById("nomLangage");
let tapeName = document.querySelector(".tapeName");
let boxJeu = document.querySelector("#boxJeu");

tapeName.style.display = "none";

window.onload = setTimeout(showTape, 7000);

function showTape() {
  tapeName.style.display = "block";
}

/*************************************************************** */
window.addEventListener("keydown", function (event) {
  key = event.key;
  // console.log(key);
  if (key === event.key) {
    nomLangage.focus();
    boxTape.classList.remove("opacite");
  }
});
let score = 0;
let numberFirst = document.getElementById("numberFirst");
let X = document.querySelectorAll(".X");
let erreur = 0;
let listeLangages = [
  "JavaScript",
  "HTML",
  "CSS",
  "SQL",
  "Python",
  "Java",
  "Bash",
  "PowerShell",
  "C#",
  "PHP",
  "C++",
  "TypeScript",
  "C",
  "Ruby",
  "Go",
  "Assembly",
  "Swift",
  "Kotlin",
  "VBA",
  "Objective-C",
  "Scala",
  "Rust",
  "Dart",
  "Elixir",
  "Clojure",
  "WebAssembly",
];

window.addEventListener("keyup", function (event) {
  key = event.key;
  // console.log(key);
  if ("Enter" === event.key) {
    boxTape.classList.add("opacite");
    input = nomLangage.value;
    find = false;
    // console.log(input);
    for (let i = 0; i < listeLangages.length; i++) {
      if (input.toLowerCase() === listeLangages[i].toLowerCase()) {
        // console.log(true);
        // score++;
        if (score < 10) {
          numberFirst.textContent = "0" + score;
        } else {
          numberFirst.textContent = score;
        }
        find = true;
        break;
      } else {
        find = false;
      }
    }
    if (find === true){
      score++;
        if (score < 10) {
          numberFirst.textContent = "0" + score;
        } else {
          numberFirst.textContent = score;
        }
    }
      else{
          erreur +=1;
          // console.log(erreur)
          switch(erreur){
            case 1:
            document.querySelector('.Xone').style = 'color: #0AEFF7';
            // console.log("perdu")
            break;

            case 2:
              document.querySelector('.Xtwo').style = 'color: #0AEFF7';
              break; 

            case 3:
              document.querySelector('.Xtree').style = 'color: #0AEFF7';
              break;
          }
      }
    // nomLangage.value = "";
  }
});

// let input = "";

///////////////////////////////////CURSOR ANIME///////////////////////////////////////////////////
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top:" + (e.pageY - 20) + "px; left:" + (e.pageX - 20) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

/*************************************************************/
// Modale pour les langages trouvés
// const modalContenair = document.querySelector(".modal-container");
// const modalTriggers = document.querySelectorAll(".modal-trigger");

// modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal))

// function toggleModal(){
//   modalContainer.classList.toggle("active")}

// function controle(){
// let saisie= document.getElementById('nomLangage').value;
// alert("Vous avez saisi : "+ saisie);

// for(let i=0; i<tapeName.length; i++){
//   let tapeClavier = tapeName[i];
//   tapeClavier.addEventListener('click', showWrite, false);
// }
