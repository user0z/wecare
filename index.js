// for navbar 

var navbar = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 0) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};


// for manubar
var element = document.getElementById("menu");
function openManu() {
    element.classList.toggle("menu-active");
}

function closeManu() {
    element.classList.remove("menu-active");
}


