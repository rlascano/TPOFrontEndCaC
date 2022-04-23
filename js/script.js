let navToggle = document.querySelector(".nav-toggle");
let nav = document.querySelector("#nav");

function toggleNav() {
    console.log("Enter")
    nav.classList.toggle("nav-show");
}

navToggle.addEventListener('click', toggleNav);