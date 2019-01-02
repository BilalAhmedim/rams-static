// navigation on click
var
nav_icon = document.querySelector('.nav-menu'),
nav_expand = document.querySelector('ul.nav-menu__item__sub'),
nav_sub__menu = document.querySelectorAll('ul li a.drop')
;

function navExpand(){
  if(nav_icon.classList[1] == undefined){
    nav_icon.classList.add('nav-menu--close');  
  }else{
    nav_icon.classList.remove('nav-menu--close');
  }
}

nav_icon.addEventListener('click', navExpand);

function nav_menu(){
  if(this.nextElementSibling.classList[1] == undefined){
    this.nextElementSibling.classList.add('nav-menu__item__sub--is-dropped');
  }else{
    this.nextElementSibling.classList.remove('nav-menu__item__sub--is-dropped');
  }
}

nav_sub__menu.forEach(elem => elem.addEventListener('click', nav_menu));