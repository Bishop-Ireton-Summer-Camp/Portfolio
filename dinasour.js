var id = null;

function moveEnemy() {
    var pos = screen.width;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        var enemy = document.getElementById("enemy");
        if (pos <= 0) {
            pos = screen.width;
    //        clearInterval(id);
        } else {
            pos--;
            enemy.style.left = pos + 'px';
        }
    }
}

var loc = 0;
var initialSkaterLocation = 0;
var jumpHeight = 0;

function setup() {
    var skater = document.getElementById("skater");
    loc = skater.offsetTop - 150;
    initialSkaterLocation = loc; // save to reset skater after jump
    skater.style.top = loc + 'px'; // move skate to this location
    var enemy = document.getElementById("enemy");
    enemy.style.top = loc + 'px';
    jumpHeight = enemy.height+50;
    document.addEventListener('keydown', (event)=>{
        var keyCode = event.code;
      
        if (keyCode == 'Space')
            jump();
    }, false);
}

var jumpInterval = null;

function jump() {
    var skater = document.getElementById("skater");
  
    loc -= jumpHeight;
    skater.style.top = loc + 'px';
   
    jumpInterval = setInterval(fall, 600);
    function fall() {
        
        skater.style.top = initialSkaterLocation + 'px';
        loc = initialSkaterLocation;
        clearInterval(jumpInterval);
    }
}