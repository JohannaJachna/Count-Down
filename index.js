// var date = $('.date-input').val();
// var userInput = $('.user-input').val();
// var submit = $('.submit-btn')
// submit.on("click", startDate);
//Set the date we're counting down to
// function startDate(){
var countDownDate = new Date("July 16, 2019").getTime();
// console.log(countDownDate);

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = "Days:" + days;
  document.getElementById("hours").innerHTML = "Hours:" + hours;
  document.getElementById("minutes").innerHTML = "Minutes:" + minutes;
  document.getElementById("seconds").innerHTML = "Seconds:" + seconds;


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("empty").innerHTML = "EXPIRED";
  }
}, 1000);


// var submit= $('.submit');
// submit.on("click", function);
