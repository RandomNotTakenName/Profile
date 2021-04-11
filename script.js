
var number=1, position, anchor;

function carouselPlus() {
    position=number;
    position++;
    if (position > 3) {
        position = 1;
    }    
    classChange(position);
    document.getElementById('CarIm').src = "img" + position + ".jpg";
    number=position;
}

function carouselMinus() {
    position=number;
    position--;
    if (position < 1) {
        position = 3;
    }
    classChange(position);
    document.getElementById('CarIm').src = "img" + position + ".jpg";
    number=position;
}

function clickChange(position) {
    document.getElementById('CarIm').src = "img" + position + ".jpg";
    classChange(position);
    number=position;
}