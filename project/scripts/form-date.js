// document.getElementById('date').valueAsDate = new Date();


let date = new Date();
date.setDate(date.getDate() + 14);
document.getElementById('date').valueAsDate = date;
