const navMenu = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-ul");

function openNav(){
    navList.classList.toggle("active");
}

navMenu.addEventListener("click", openNav);