// declare variables.
var today = moment().format("ddd MMM Do, YYYY");
var time = moment().format("k");
var eightAM = document.getElementById("8AM");
var eightAMp = document.getElementById("8AMp");
var nineAM = document.getElementById("9AM");
var tenAM = document.getElementById("10AM");
var elevenAM = document.getElementById("11AM");
var noon = document.getElementById("12PM");
var onePM = document.getElementById("1PM");
var twoPM = document.getElementById("2PM");
var threePM = document.getElementById("3PM");
var fourPM = document.getElementById("4PM");
var fivePM = document.getElementById("5PM");
// display current date at top of application.
$("#today").text(today);
// change css based on if time slot is past, preset, or future.
if (time > 8) {
  eightAM.classList.add("past");
} else if (time == 8) {
  eightAM.classList.add("present");
} else {
  eightAM.classList.add("future");
}

if (time > 9) {
  nineAM.classList.add("past");
} else if (time == 9) {
  nineAM.classList.add("present");
} else {
  nineAM.classList.add("future");
}

if (time > 10) {
  tenAM.classList.add("past");
} else if (time == 10) {
  tenAM.classList.add("present");
} else {
  tenAM.classList.add("future");
}

if (time > 11) {
  elevenAM.classList.add("past");
} else if (time == 11) {
  elevenAM.classList.add("present");
} else {
  elevenAM.classList.add("future");
}

if (time > 12) {
  noon.classList.add("past");
} else if (time == 12) {
  noon.classList.add("present");
} else {
  noon.classList.add("future");
}

if (time > 13) {
  onePM.classList.add("past");
} else if (time == 13) {
  onePM.classList.add("present");
} else {
  onePM.classList.add("future");
}

if (time > 14) {
  twoPM.classList.add("past");
} else if (time == 14) {
  twoPM.classList.add("present");
} else {
  twoPM.classList.add("future");
}

if (time > 15) {
  threePM.classList.add("past");
} else if (time == 15) {
  threePM.classList.add("present");
} else {
  threePM.classList.add("future");
}

if (time > 16) {
  fourPM.classList.add("past");
} else if (time == 16) {
  fourPM.classList.add("present");
} else {
  fourPM.classList.add("future");
}

if (time > 17) {
  fivePM.classList.add("past");
} else if (time == 17) {
  fivePM.classList.add("present");
} else {
  fivePM.classList.add("future");
}

