const main = document.querySelector("main");
const checkbox = document.querySelector('#toggleCheckbox');

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const menu = document.querySelector("#menu");
const footer = document.querySelector("footer");

checkbox.addEventListener('change', function() {

    main.classList.toggle('dark');
    header.classList.toggle('dark');
    nav.classList.toggle('dark');
    menu.classList.toggle('dark-menu');
    footer.classList.toggle('dark');
  });
