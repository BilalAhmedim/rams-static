// navigation on click
var
nav_icon = document.querySelector('.nav-menu');

function navExpand(){
  if(nav_icon.classList[1] == undefined){
    nav_icon.classList.add('nav-menu--close');
  }else{
    nav_icon.classList.remove('nav-menu--close');
  }
}

nav_icon.addEventListener('click', navExpand);
