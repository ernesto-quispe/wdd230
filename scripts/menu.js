const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
console.log(hamButton);
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
   console.log("hide");
});