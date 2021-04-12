
var i=0, imageArray=["photo/123.jpg","photo/20200920_143758.jpg","photo/20201011_110541.jpg","photo/IMG_20191009_160452_066.jpg"];

function slider() {
    if(i<0) i=3;
    if(i>3) i=0;
    document.getElementById('target').src=imageArray[i];
}