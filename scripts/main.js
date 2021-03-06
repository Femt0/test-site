var myImage = document.querySelector("img");

myImage.onclick = function () {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/THE_SMILE_600x600.jpg") {
        myImage.setAttribute("src", "images/THE_SMILE2.jpg");
    } else {
        myImage.setAttribute("src", "images/THE_SMILE_600x600.jpg");
    }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "The Smile is cool, " + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "The Smile is cool, " + storedName;
}

myButton.onclick = function () {
    setUserName();
};
