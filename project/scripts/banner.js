 let closeBanner = document.querySelector("#close-banner"); 
 
 closeBanner.addEventListener('click', () => {
	let chamberMeetBanner = document.querySelector("#weather-banner");
	chamberMeetBanner.classList.toggle("displayed");
});

