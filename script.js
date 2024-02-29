function abrirMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".icon-hamburguer");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function selectLanguage(lang){
  if(lang=='en'){
    window.location.href = "english.html";
  }
  else{
    window.location.href = "index.html";
  }
}