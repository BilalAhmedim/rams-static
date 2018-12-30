// navigation on click
var
nav_icon = document.querySelector('.nav-menu'),
nav_expand = document.querySelector('.nav-menu__item__sub'),
nav_sub__menu = document.querySelector('.navigation ul.nav-menu__item li a')
;

function navExpand(){
  if(nav_icon.classList[1] == undefined){
    nav_icon.classList.add('nav-menu--close');
  }else{
    nav_icon.classList.remove('nav-menu--close');
  }
}

nav_icon.addEventListener('click', navExpand);

function nav_menu(e){
  console.log(nav_sub__menu)
  if(nav_expand.classList[1] == undefined){
    this.e.classList.add('nav-menu__item__sub--is-dropped');
  }else{
    this.e.classList.remove('nav-menu__item__sub--is-dropped');
  }
}
nav_sub__menu.addEventListener('click', nav_menu);