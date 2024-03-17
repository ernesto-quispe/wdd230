const main = document.querySelector("main");
const checkbox = document.querySelector('#toggleCheckbox');

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const menu = document.querySelector("#menu");
const footer = document.querySelector("footer");
const h1 = document.querySelector("h1");
const banner = document.querySelector("#meetbanner p");

checkbox.addEventListener('change', function() {

    main.classList.toggle('dark');
    header.classList.toggle('dark');
    nav.classList.toggle('dark');
    menu.classList.toggle('dark-menu');
    footer.classList.toggle('dark');
    h1.classList.toggle('dark');
    banner.classList.toggle('dark');
  });
