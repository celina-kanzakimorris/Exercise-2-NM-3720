var l1 = document.getElementById("text");
var l2 = document.getElementById("text");
var l3 = document.getElementById("text");
var l4 = document.getElementById("text");
var l5 = document.getElementById("text");
var title = document.getElementById("title");


document.getElementById("clickMe").onclick = function () {
    Line1();
    title.style.display = "none";
};


function Line1() {
    l1.innerHTML = 'There is a pleasure in the pathless woods,';
    document.getElementById("backgroundImage").style.backgroundImage = "url('images/tree-3207716_1920.jpg')";
    l1.onmouseenter = function(){
        mouseOver()
    };
    l1.onmouseout = function(){
        mouseOut()
    };
}


function Line2() {
    l2.innerHTML = 'There is a rapture on the lonley shore,';
    document.getElementById("backgroundImage").style.backgroundImage = "url('images/sea-1031262_1920.jpg')";
}

function Line3(){
    l3.innerHTML = 'There is society, where none intrudes';
    document.getElementById("backgroundImage").style.backgroundImage = "url('images/nature-3048072_1920.jpg')";
}


function Line4(){
    l4.innerHTML = 'By the deep sea, and music in its roar:';
    document.getElementById("backgroundImage").style.backgroundImage = "url('images/ocean-3992688_1920.jpg')";
}

function Line5(){
    l5.innerHTML = 'I love not man the less, but nature more';

}

function mouseOver(){
    l1.style.color = "#F865B0";
}

function mouseOut(){
    Line2();
}

