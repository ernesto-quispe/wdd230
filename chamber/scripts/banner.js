const now = new Date();

let day = now.getDay();
day = 2;

if (day === 1 || day === 2 || day === 3) {

    close_banner();
}

 let closeBanner = document.querySelector("#close-banner"); 
 closeBanner.addEventListener('click', close_banner);


function close_banner() {
	let chamberMeetBanner = document.querySelector("#meetbanner")
	chamberMeetBanner.classList.toggle("displayed")
}


