/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";}  

  }
  function showLink() {
    var gender = prompt("Please select your gender. Type 'M' for male or 'F' for female:");

    if (gender === "F" || gender === "f") {
      window.location.href = "https://chat.whatsapp.com/Ki736jev2ygD0m18eZffW0";
    } else if (gender === "M" || gender === "m") {
      alert("Please note that this is for Muslimahs alone.");
    } else {
      alert("Invalid input. Please try again.");
      showLink();
    }
  }
  //vendor's list
  function vendorList() {
    var vendor = alert("Please check back later, collation in progress.");}

  
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

                                                