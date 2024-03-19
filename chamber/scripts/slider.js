const main = document.querySelector("main");
const checkbox = document.querySelector('#toggleCheckbox');

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const menu = document.querySelector("#menu");
const footer = document.querySelector("footer");
const h1 = document.querySelector("h1");
const banner = document.querySelector("#meetbanner p");
const formlabels = document.querySelectorAll(".top");
const radiolabels = document.querySelectorAll(".sbs");
const memberCardLink = document.querySelectorAll(".member-card-link");

checkbox.addEventListener('change', function() {

    main.classList.toggle('dark');
    header.classList.toggle('dark');
    nav.classList.toggle('dark');
    menu.classList.toggle('dark-menu');
    footer.classList.toggle('dark');
    h1.classList.toggle('dark');
    if (banner) {
    banner.classList.toggle('dark');
    }

    formlabels.forEach((element) => {
      element.classList.toggle('dark');
    })
    radiolabels.forEach((element) => {
      element.classList.toggle('dark');
    })
    memberCardLink.forEach((element) => {
      element.classList.toggle('dark-link');
      console.log(element);
    })
  

  });
