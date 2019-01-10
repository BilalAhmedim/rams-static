// navigation Target Classes
var
nav_icon = document.querySelector('.nav-menu'),
nav_expanded = document.querySelector('.nav-menu__item'),
nav_content_hide = document.querySelector('.nav-menu__content'),
nav_content__show = document.querySelector('.nav-menu__content--show'),
nav_sub__menu = document.querySelectorAll('ul li a.drop')
;
// Navigation Menu Icon
function navExpand(){
  if(nav_icon.classList[1] == undefined){
    nav_icon.classList.add('nav-menu--close');
    nav_expanded.classList.add('nav-menu__item--is-expend');
    nav_content_hide.classList.add('nav-menu__content--show');

  }else{
    nav_icon.classList.remove('nav-menu--close');
    nav_expanded.classList.remove('nav-menu__item--is-expend');
    nav_content_hide.classList.remove('nav-menu__content--show');
  }
}

nav_icon.addEventListener('click', navExpand);  // Event Listener


// Navigation Items DrpoDown Menu
function nav_menu(){
  if(this.nextElementSibling.classList[1] == undefined){
    this.nextElementSibling.classList.add('nav-menu__item__sub--is-dropped');
  }else{
    this.nextElementSibling.classList.remove('nav-menu__item__sub--is-dropped');
  }
}

nav_sub__menu.forEach(elem => elem.addEventListener('click', nav_menu)); // Event Listener

//////////////////////////////
////////End Navigation////////
//////////////////////////////


//////////////////////////////
/////////// Slider ///////////
//////////////////////////////


//  Variables for slider
// var
// slider__images = document.querySelector('.slider__images'),
// slider__images__items =  document.querySelector('.slider__images__items'),
// slider__images__count = slider__images.childElementCount,
// createLiElement = document.createElement('li')
// currentIndex = 1
// ;

// function addActiveClassToRight(e){

// }
// function addActiveClassToLeft(e){

// }
// rightArrow.addEventListener('click', addActiveClass);
// leftArrow.addEventListener('click', addActiveClass);
// carausel.addEventListener('click', addActiveClass);