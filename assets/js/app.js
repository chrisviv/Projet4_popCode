let loading = document.querySelector("#title") ;
let wrapper = document.querySelector(".wrapper");
let newPage = document.querySelector("#display") ;


window.onload = setTimeout(showContent, 15000);

function showContent() {
  loading.style.display = "none";
  wrapper.style.display = "none";
  newPage.style.display = "block";
}
