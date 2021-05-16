
var i = 0, prev = 1, pushed, moving, imageArray = ["photo/1.jpg", "photo/2.jpg", "photo/3.jpg", "photo/4.jpg"];

function slider() {
    if (i < 0) i = 3;
    if (i > 3) i = 0;
    document.getElementById('target').src = imageArray[i];
    document.getElementById('Button' + prev).classList.toggle('active');
    document.getElementById('Button' + (i + 1)).classList.toggle('active');
    prev = (i + 1);
}

function animatron() {
    if (prev == i) pushed = "rsb"
    else pushed = "lsb";
    moving = document.getElementById(pushed);
    moving.classList.toggle("moving");
    let scavenger = setTimeout(function() {
        moving.classList.toggle("moving");
    }, 500);
    slider();
}