var id = null;

function moveEnemy() {
    var skater = document.getElementById("enemy");
    var pos = screen.width;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos <= 0) {
            pos = screen.width;
            //clearInterval(id);
        } else {
            pos--;
            //skater.style.top = pos + 'px';
            skater.style.left = pos + 'px';
        }
    }
}