 let closeBanner = document.querySelector("#close-banner"); 
 
 closeBanner.addEventListener('click', () => {
	let chamberMeetBanner = document.querySelector("#meetbanner");
	chamberMeetBanner.classList.toggle("displayed");
});

