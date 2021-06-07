
var here = 1, there = 1, i = 0, prev = 1, pushed, moving, target, 
imageArray = ["photo/1.jpg", "photo/2.jpg", "photo/3.jpg", "photo/4.jpg"],
someArray = [],
navArray = ['nav', 'navGreeting', 'navSkills', 'navExperience', 'navSlider', 'navContacts'];

window.onload = function() {
    let n=1;
    do {
        someArray.push(document.getElementById(navArray[n].slice(3)).offsetTop + 200);
        n++;
    } while (n<6); 
    someArray.push(someArray[4] + window.innerHeight);
}

window.addEventListener("scroll", handle);

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

function navigator(target) {
    let goTo = document.getElementById(target);
    goTo.scrollIntoView({top: 0, behavior: 'smooth'});
}

function handle() {
    let seen = (window.innerHeight + window.pageYOffset),
    here = someArray.findIndex((element) => seen < element);
    if (here != there) {
        if (here != -1) {
            document.getElementById(navArray[here]).classList.toggle('here');
            document.getElementById(navArray[there]).classList.toggle('here');
            there = here;
        }
    }
}