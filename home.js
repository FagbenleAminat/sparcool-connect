/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";}  

  }
 
  var promptShown = false;

  function showLink() {
    if (promptShown) {
      alert("You have already selected your gender.");
      return;
    }

    var gender = prompt("Please select your gender. Type 'M' for male or 'F' for female:");

    if (gender === "F" || gender === "f") {
      window.location.href = "https://chat.whatsapp.com/Ki736jev2ygD0m18eZffW0";
    } else if (gender === "M" || gender === "m") {
      alert("Please note: This is for Muslimahs alone, Men are not allowed.");
      promptShown = true;
    } else {
      alert("Invalid input. Please try again.");
      showLink();
    }
  }
// scrolling navbar

window.onscroll = function() {myFunction()};

var topBar = document.querySelector(".top");

var sticky = topBar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    topBar.classList.add("sticky")
  } else {
    topBar.classList.remove("sticky");
  }
}
// question and answer
function toggleAnswer(question) {
  var answer = question.nextElementSibling;
  var icon = question.querySelector(".icon");
  if (answer.style.display === "block") {
    answer.style.display = "none";
    icon.innerText = "+";
  } else {
    answer.style.display = "block";
    icon.innerText = "-";
  }
}

