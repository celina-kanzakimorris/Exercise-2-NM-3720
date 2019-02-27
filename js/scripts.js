var l1 = document.getElementById("text");
var title = document.getElementById("title");
var img = document.getElementById("backgroundImage");





document.getElementById("clickMe").onclick = function() {
    // Line1();
    // title.style.display = "none";
};


document.onscroll = ScrollNext;

function ScrollNext() {
    //Figure out height
    // Decide which Line() to call

    var scrollPosition = window.scrollY;
    var height = window.innerHeight;

    //If scrollPosition == height then #1
    if(scrollPosition <= height) {
        Line1();
    }
    else if(scrollPosition <= height*2){
        Line2();
    }
    else if(scrollPosition <= height*3){
        Line3();
    }
    else if(scrollPosition <= height*4){
        Line4();
    }
    else{
        Line5();
    }
    
    //If scrollPosition == height*2 then #2
    //If scrollPosition == height*3 then #3
    //If scrollPosition == height*4 then #4
    //If scrollPosition == height*5 then #5

}

// if (scrollPosition == ) {
function Line1() {
    
    
    l1.innerHTML = 'There is a pleasure in the pathless woods,';
    img.style.backgroundImage = "url('images/tree-3207716_1920.jpg')";
    //https: //pixabay.com/photos/tree-trunk-branch-row-row-of-trees-3207716/

    //mouseEvent from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseenter_dom
    
    // l1.onmouseenter = function(){
    //     mouseOver()
    // };
    // l1.onmouseout = function(){
    //     mouseOut()
    // };
}//} 


function Line2() {    
    l1.innerHTML = "There is a rapture on the lonley shore,";
    img.style.backgroundImage = "url('images/sea-1031262_1920.jpg')";
    //https://pixabay.com/photos/sea-black-and-white-nature-1031262/
    
} 


function Line3() {    
    l1.innerHTML = 'There is society, where none intrudes';
    img.style.backgroundImage = "url('images/nature-3048072_1920.jpg')";
    //https://pixabay.com/photos/nature-landscape-travel-snow-3048072/
}


function Line4(){
    l1.innerHTML = 'By the deep sea, and music in its roar:';
    img.style.backgroundImage = "url('images/ocean-3992688_1920.jpg')";
    //https://pixabay.com/photos/ocean-sea-water-surf-coastline-3992688/

}

function Line5(){
    l1.innerHTML = 'I love not man the less, but nature more';
    img.style.backgroundImage = "url('images/roses-2744274_1920.jpg')";
    //https://pixabay.com/photos/roses-black-white-macro-flower-2744274/
}

//     //mouseEvent from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onmouseenter_dom
// function mouseOver(){
//     l1.style.color = "#F865B0";
// }

// function mouseOut(){
//     l1.style.color = "#76E7CD";
// }

// function mouseIn() {
//     l1.style.color = "#76E7CD";
// }



//
