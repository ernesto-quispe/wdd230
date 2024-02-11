const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const navLinks = document.querySelector('.navLinks');
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	navLinks.classList.toggle('open');
});