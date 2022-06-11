var enemyPos = 0;
var enemy = null;
var movingEnemy = null;
var moving = false;

function startMove() {
    if (!moving) {
        moving = true;
        enemy = document.getElementById("enemy");
        enemyPos = enemy.offsetLeft;;
        movingEnemy = new Timer(moveEnemy, 5, -1);
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
}

var skaterLoc = 0;
var initialSkaterLocation = 0;

function setup() {
    var skater = document.getElementById("skater");
    skaterLoc = skater.offsetTop;
    skater.style.top = skaterLoc + 'px';
    initialSkaterLocation = skaterLoc; // save to reset skater after jump

    document.addEventListener('keydown', (event) => {
        var keyCode = event.code;
        if (keyCode == 'Space') {
            jump();
        }
    }, false);
}

function jump() {
    var skater = document.getElementById("skater");
    skaterLoc -= 150;
    skater.style.top = skaterLoc + 'px';
    var timer = new Timer(fall, 500, 1);
}

function fall() {
    skater.style.top = initialSkaterLocation + 'px';
    skaterLoc = initialSkaterLocation;
}

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

    this.kill = function() {
        timesCount = 1;
        times=0;
    }
}

Timer.instances = [];

Timer.ontick = function () {
    for (var i in Timer.instances) {
        Timer.instances[i].tick();
    }
};

window.setInterval(Timer.ontick, 10);
