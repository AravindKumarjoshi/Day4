let button = document.getElementById("theBoxes");
button.addEventListener("click", myFunction);

//create function()
var oldvalue = 0;
var i = 1;

function myFunction() {
    let n = document.getElementById("number").Value;
    n = parseInt(oldvalue) + parseInt(n);
    for (; i <= n; i++) {

        var box = document.createElement("div");
        box.classList.add("myDiv");
        document.getElementById("box").appendChild(box);
        box.innerHTML = i;
        oldvalue = document.getElementById("box").lastElementChild.innerHTML;
        console.log(oldvalue);
    }
}