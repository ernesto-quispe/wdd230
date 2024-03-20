const checkbox = document.querySelector('#toggleCheckbox');

checkbox.addEventListener('change', toggleDark);
const slider = document.querySelector('.slider');

function toggleDark() {

  if(checkbox.checked) {
    slider.classList.add('move');
  } else {
    slider.classList.remove('move');
  }
  
  const main = document.querySelector("main");
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const menu = document.querySelector("#menu");
  const footer = document.querySelector("footer");
  const h1 = document.querySelector("h1");
  const banner = document.querySelector("#meetbanner p");
  const formlabels = document.querySelectorAll(".top");
  const radiolabels = document.querySelectorAll(".sbs");
  const memberCardLink = document.querySelectorAll(".member-card-link");
  const membercards = document.querySelectorAll(".list section:nth-child(even) p, .list section:nth-child(even) a");
  const membercardsH3 = document.querySelectorAll(".list section:nth-child(odd) .member-card-H3");
  const membercardsH3Grid = document.querySelectorAll(".grid .member-card-H3");
  const linkWeather = document.querySelector('.link-weather');


    body.classList.toggle('dark-body');
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
    })
    membercards.forEach((element) => {
      element.classList.toggle('dark-list');
    })
    membercardsH3.forEach((element) => {
      element.classList.toggle('dark-list-h3');
    })
    membercardsH3Grid.forEach((element) => {
      element.classList.toggle('dark-list-h3');
    })
    if (linkWeather){
    linkWeather.classList.toggle('dark-link');
    }
  };