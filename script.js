
var i=0, prev=1, imageArray=["photo/1.jpg","photo/2.jpg","photo/3.jpg","photo/4.jpg"];

function slider() {
    if(i<0) i=3;
    if(i>3) i=0;
    document.getElementById('target').src=imageArray[i];
    document.getElementById('Button' + prev).classList.toggle('active');
    document.getElementById('Button' + (i + 1)).classList.toggle('active');
    prev=(i+1);
}
