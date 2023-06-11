const menuBar = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelectorAll(".scroll-link");
const button = document.querySelector(".btn");
const navbar = document.querySelector(".navbar");
const about =document.querySelector("#about");
const navCenter = document.querySelector(".nav-center");
const backTop = document.querySelector(".top-link");

function showMenu() {
    linksContainer.classList.toggle("show");
}

function showNav() {
    let scroll = window.scrollY;
    if (scroll > lastScrollLevel) {
        navbar.classList.add("scroll-hide");
    } else {
        navbar.classList.remove("scroll-hide");
    }
    lastScrollLevel = scroll;

    const navbarHeight = navbar.clientHeight - 15;
    if (scroll > navbarHeight) {
        navbar.classList.add("fixed-nav");
    }else{
        navbar.classList.remove("fixed-nav");
    }

    const aboutPosition = about.offsetTop;

    if (scroll > aboutPosition) {
        backTop.classList.add("show");
    }else{
        backTop.classList.remove("show");
    }
}
button.addEventListener("click", () => {
    linksContainer.classList.remove("show");
});
links.forEach((link) => {
    link.addEventListener("click", showMenu)
});
menuBar.addEventListener("click", showMenu);
// Scroll effect
let lastScrollLevel;
window.addEventListener("scroll", showNav);