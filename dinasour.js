var enemyPos = 0;
var enemy = null;
var movingEnemy = null;
var moving = false;

var skater = null;

function startMove() {
    if (!moving) {
        moving = true;
        enemyPos = enemy.offsetLeft;
        movingEnemy = new Timer(moveEnemy, 1, -1);
    }
}

function stopMove() {
    movingEnemy.kill();
    moving = false;
}

function moveEnemy() {
    enemyPos--;
    if (enemyPos <= 0) {
        enemyPos = screen.width;
    }
    enemy.style.left = enemyPos + 'px';
    if (colliding()) {
        stopMove();
    }
}

var skaterLoc = 0;
var initialSkaterLocation = 0;


function setup() {
    skater = document.getElementById("skater");
    enemy = document.getElementById("enemy");
    skaterLoc = skater.offsetTop;
    skater.style.top = skaterLoc + 'px';
    initialSkaterLocation = skaterLoc; // save to reset skater after jump

    document.addEventListener('keydown', (event) => {

        var keyCode = event.code;
        console.log(keyCode);
        if (keyCode == 'ArrowUp') {// using Space caused problem with button
            jump();
        }
    }, false);
}

function jump() {   
    skaterLoc -= 80;
    skater.style.top = skaterLoc + 'px';
    var timer = new Timer(fall, 2000, 1);
}

function fall() {
    skater.style.top = initialSkaterLocation + 'px';
    skaterLoc = initialSkaterLocation;
}

// COLLISION

function colliding() {
    var x1 = skater.offsetLeft;
    var y1 = skater.offsetTop;
    var x2 = enemy.offsetLeft;
    var y2 = enemy.offsetTop;
    var w1 = skater.width;
    var h1 = skater.offsetHeight;
    var w2 = enemy.width;
    var h2 = enemy.offsetHeight;

    if (x2 > x1 + w1 || x1 > x2 + w2 || y1 > y2 + h2 || y2 > y1 + h1) {
        return false;
    }
    return true;
}

// TIMER

function Timer(funct, delayMs, times) {
    if (times == undefined) {
        times = -1;

    }
    if (delayMs == undefined) {
        delayMs = 10;
    }

    this.funct = funct;
    var times = times;
    var timesCount = 0;
    var ticks = (delayMs / 10) | 0;
    var count = 0;

    Timer.instances.push(this);

    this.tick = function () {
        if (count >= ticks) {
            this.funct();
            count = 0;
            if (times > -1) {
                timesCount++;
                if (timesCount >= times) {
                    this.stop();
                }
            }
        }
        count++;
    };

    this.stop = function () {
         var index = Timer.instances.indexOf(this);
        Timer.instances.splice(index, 1);
    };

    this.kill = function () {
        timesCount = 1;
        times = 0;
    }
}

Timer.instances = [];

Timer.ontick = function () {
    for (var i in Timer.instances) {
        Timer.instances[i].tick();
    }
};

window.setInterval(Timer.ontick, 10);
