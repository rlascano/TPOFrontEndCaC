//Mostrar y esconder menú superior

let navToggle = document.querySelector(".nav-toggle");
let nav = document.querySelector("#nav");

function toggleNav() {
  nav.classList.toggle("nav-show");
}

navToggle.addEventListener("click", toggleNav);

//Navegación Secundaria
let secondaryNavLinks = document.querySelectorAll(".secondary_nav a");

secondaryNavLinks.forEach((link) => {
  link.addEventListener("click", () => showArticle(link));
});

function showArticle(link) {
  secondaryNavLinks.forEach((link) => {
    link.classList.remove("active");
  });
  link.classList.add("active");
}
