var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/briyani.jpg') {
        myImage.setAttribute ('src','images/chickenbriyani.jpg');
        } else {
        myImage.setAttribute ('src','images/briyani.jpg');    
        }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Search Your Favourite Briyani ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Search your favourite Briyani ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}