var navbar = document.querySelector("#navbar");
var navmenu = document.querySelector("#nav-menu");
var navclose = document.querySelector("#nav-close");
var navdropdown = document.querySelector("#nav-dropdown");

window.addEventListener("scroll", function(){
if(window.scrollY > 10){
    navbar.classList.add("navbar-scrolled")
    navdropdown.classList.add("navlist-scrolled")
}
else{
    navbar.classList.remove("navbar-scrolled")
    navdropdown.classList.remove("navlist-scrolled")
}
});

navmenu.addEventListener("click", function (){
navmenu.classList.add("hidden");
navclose.classList.remove("hidden");
navdropdown.classList.remove("hidden");
});

navclose.addEventListener("click", function(){
navclose.classList.add("hidden");
navmenu.classList.remove("hidden");
navdropdown.classList.add("hidden");
});