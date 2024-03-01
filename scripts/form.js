const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.display = "block";
		kp2.style.backgroundColor = "#fff0f3";
        kp1.value = "";
		kp2.value = "";
		kp1.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}


const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
    if (range.value <= 4) {
        rangevalue.classList.add("lowRating");
        rangevalue.classList.remove("midRating");
        rangevalue.classList.remove("highRating");
}
else if ( range.value >4 && range.value <= 7){
    rangevalue.classList.remove("lowRating");
    rangevalue.classList.add("midRating");
    rangevalue.classList.remove("highRating");
}
else {
    rangevalue.classList.remove("lowRating");
    rangevalue.classList.remove("midRating");
    rangevalue.classList.add("highRating");
}

}