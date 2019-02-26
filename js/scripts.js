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
    //https: //pixabay.com/photos/tree-trunk-branch-row-row-of-trees-3207716/

    //mouseEvent from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseenter_dom
    
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
    //https://pixabay.com/photos/sea-black-and-white-nature-1031262/
}

function Line3(){
    l3.innerHTML = 'There is society, where none intrudes';
    document.getElementById("backgroundImage").style.backgroundImage = "url('images/nature-3048072_1920.jpg')";
    //https://pixabay.com/photos/nature-landscape-travel-snow-3048072/

}


function Line4(){
    l4.innerHTML = 'By the deep sea, and music in its roar:';
    document.getElementById("backgroundImage").style.backgroundImage = "url('images/ocean-3992688_1920.jpg')";
    //https://pixabay.com/photos/ocean-sea-water-surf-coastline-3992688/

}

function Line5(){
    l5.innerHTML = 'I love not man the less, but nature more';
    document.getElementById("backgroundImage").style.backgroundImage = "url('images/roses-2744274_1920.jpg')";
    //https://pixabay.com/photos/roses-black-white-macro-flower-2744274/
}

    //mouseEvent from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseenter_dom
function mouseOver(){
    l1.style.color = "#F865B0";
}

function mouseOut(){
    Line2();
    l2.style.color = "#76E7CD";
}

