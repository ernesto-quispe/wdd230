const sinceLast = document.querySelector("#sinceLast");

let currentVisit = Number(Date.now());
let lastVisit = window.localStorage.getItem("lastVisit") || 0;
let difference = (currentVisit - lastVisit) / (1000*60*60*24);

if(lastVisit == 0)
{
	sinceLast.textContent = "Welcome! Let us know if you have any questions.";
}
else if (difference > 0 && difference < 1) {
	sinceLast.textContent = "Back so soon! Awesome!";
}
else {
    let letter = difference >= 2 ? "s" : "";
	sinceLast.textContent = `You last visited ${Math.floor(difference)} day${letter} ago.`;
}
localStorage.setItem("lastVisit", currentVisit);