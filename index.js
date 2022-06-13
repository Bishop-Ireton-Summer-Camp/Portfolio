// this code is from https://jonhmchan.com/essays/2014/4/28/finally-a-guide-to-hosting-your-website
// alert("This is an alert I created in index.js!");

// This code is from https://www.w3schools.com/howto/howto_js_countdown.asp
// Display a countdown timer in an element

// create the date we are counting down
var countDownDate = new Date("Dec 31, 2022 7:00:00").getTime();

//
var x = setInterval(function() {
    var now = new Date().getTime(); // Get (Today's Date and Time
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 *24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60))/ (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // add text if (distance < 0)

})

let btnHello=document.querySelector('#hello');
btnHello.addEventListener('click',()=>{
    btnHello.textContent='clicked';
    alert("You clicked the button!");
})