$(document).ready(function() {
    var choice = prompt("What would you like to learn about?");

    if (choice === "snakes") {
      $('#snakes').show();
    } else if (choice === "turtles") {
      $('#turtles').show();
    } else if (choice === "insects") {
      $('#insects').show();
    } else {
      alert("Sorry, I didn't get that.");
    }
})
