var id = null;

function moveEnemy() {
    var pos = screen.width;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos <= 0) {
            pos = screen.width;
            //    var enemy = document.getElementById("enemy");
            clearInterval(id);
        } else {
            pos--;
            enemy.style.left = pos + 'px';
        }
    }
}

var loc = 0;
var initialSkaterLocation = 0;

function setup() {
    var skater = document.getElementById("skater");
    loc = skater.offsetTop - skater.scrollTop;
    initialSkaterLocation = loc; // save to reset skater after jump
    document.addEventListener('keydown', (event)=>{
      //  var keyValue = event.key;
      //  var keyCode = event.code;
      //  console.log("key value: " + keyValue);
      //  console.log("code value: " + keyCode);
        jump();
    }, false);
}

var jumpInterval = null;

function jump() {
    var skater = document.getElementById("skater");
    loc -= 200;
    console.log(loc);
    skater.style.top = loc + 'px';

    id = setInterval(fall, 500);
    function fall() {
        
        skater.style.top = initialSkaterLocation + 'px';
        loc = initialSkaterLocation;
        clearInterval(id);
    }
}