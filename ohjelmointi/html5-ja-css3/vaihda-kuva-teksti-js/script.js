









/*
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/firefox-icon.png') {
      myImage.setAttribute('src','img/brave-icon.png');
    } else {
      myImage.setAttribute('src','img/firefox-icon.png');
    }
}
*/















/*let myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'img/firefox-icon.png') {
    myImage.setAttribute('src', 'img/brave-icon.jpg');
    document.body.background = 'rgb(255, 255, 255)';
    myHeading.textContent = 'Is Brave even cooler?';
  } else {
    myImage.setAttribute('src', 'img/firefox-icon.png');
    document.body.background = '#FF9500';
    if (!localStorage.getItem('name')) {
      setUserName();
    } else {
      let storedName = localStorage.getItem('name');
      myHeading.textContent = 'Mozilla is cool, ' + storedName;
    }
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
  setUserName();
}

function Return(x) {
  const myHeading = document.querySelector('h1');
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
*/