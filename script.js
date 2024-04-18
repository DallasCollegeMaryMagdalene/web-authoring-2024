var guest = prompt("What is your name? Please enter.");
// document.write("<h2> We are happy to welcome you to our site, " + guest + "!</h2>");
document.getElementById("welcome").innerHTML = "Welcome, " + guest;

function changeStyle(newStyle) {
    document.getElementById('color').setAttribute('href', newStyle);
}

function myFunction() {
  var respNav = document.getElementById("myTopnav");
  if (respNav.className === "topnav") {
    respNav.className += " responsive-nav";
  } else {
    respNav.className = "topnav";
  }
}