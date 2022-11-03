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

var description = document.querySelectorAll(".description");
// var text = localStorage.getItem("description");
// description.textContent = text;

// function to save p element to local storage.
$(".saveBtn").click(function (event) {
  console.log(event.target.parentElement.children[1].children[0].innerText);
  console.log(event.target.parentElement.children[1].id);
  localStorage.setItem(
    "description" + event.target.parentElement.children[1].id,
    event.target.parentElement.children[1].children[0].innerText
  );
});

// function to retrieve saved p element from local storage
function savedEvents() {
  // var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
  var eightAMSaved = localStorage.getItem("description8AM");
  var nineAMSaved = localStorage.getItem("description9AM");
  var tenAMSaved = localStorage.getItem("description10AM");
  var elevenAMSaved = localStorage.getItem("description11AM");
  var noonSaved = localStorage.getItem("description12PM");
  var onePMSaved = localStorage.getItem("description1PM");
  var twoPMSaved = localStorage.getItem("description2PM");
  var threePMSaved = localStorage.getItem("description3PM");
  var fourPMSaved = localStorage.getItem("description4PM");
  var fivePMSaved = localStorage.getItem("description5PM");
  if (eightAMSaved !== null) {
    document.getElementById("8AM").children[0].innerHTML = eightAMSaved;
  }
  if (nineAMSaved !== null) {
    document.getElementById("9AM").children[0].innerHTML = nineAMSaved;
  }
  if (tenAMSaved !== null) {
    document.getElementById("10AM").children[0].innerHTML = tenAMSaved;
  }
  if (elevenAMSaved !== null) {
    document.getElementById("11AM").children[0].innerHTML = elevenAMSaved;
  }
  if (noonSaved !== null) {
    document.getElementById("12PM").children[0].innerHTML = noonSaved;
  }
  if (onePMSaved !== null) {
    document.getElementById("1PM").children[0].innerHTML = onePMSaved;
  }
  if (twoPMSaved !== null) {
    document.getElementById("2PM").children[0].innerHTML = twoPMSaved;
  }
  if (threePMSaved !== null) {
    document.getElementById("3PM").children[0].innerHTML = threePMSaved;
  }
  if (fourPMSaved !== null) {
    document.getElementById("4PM").children[0].innerHTML = fourPMSaved;
  }
  if (fivePMSaved !== null) {
    document.getElementById("5PM").children[0].innerHTML = fivePMSaved;
  }
}
//  call function to load saved events
savedEvents();
