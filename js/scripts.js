$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#over-18').show();
  } else if (age < 18){
    $('#under-18').show();
  } else {
    alert("Error: Please enter a number indicating your age.");
  }
});
