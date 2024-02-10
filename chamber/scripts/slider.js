const modeButton = document.querySelector(".switch");
const main = document.querySelector("main");
const checkbox = document.querySelector('#toggleCheckbox');

checkbox.addEventListener('change', function() {

    main.classList.toggle('dark');
  });
