var l1 = document.getElementById("l1");

var l2 = document.getElementById("l2");
var l3 = '"There is society, where none intrudes"';
var l4 = '"By the deep sea, and music in its roar:"';
var l5 = '"I love not man the less, but nature more"';
var title = document.getElementById("title");


document.getElementById("clickMe").onclick = function () {
    Line1();
    title.style.display = "none";
};


function Line1() {
    l1.innerHTML = '"There is a Pleasure in the Pathless woods,"';
    document.getElementById("backgroundImage").style.backgroundImage = "url('images/tree-3207716_1920.jpg')";
}

function Line2() {
    l2.innerHTML = '"There is a rapture on the lonley shore,"';
    document.getElementById("backgroundImage").style.backgroundImage = "url('images/sea-1031262_1920.jpg')";
}


