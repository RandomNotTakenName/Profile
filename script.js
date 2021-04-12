
var i, imageArray=["photo/123.jpg","photo/20200920_143758.jpg","photo/20201011_110541.jpg","photo/IMG_20191009_160452_066.jpg"];

function slider(i) {
    document.getElementById('target').src=imageArray[i];
    console.log(imageArray[i]);
}