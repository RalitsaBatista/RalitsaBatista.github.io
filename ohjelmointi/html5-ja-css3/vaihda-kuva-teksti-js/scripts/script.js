/*let myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-logo.png') {
    myImage.setAttribute('src', 'images/brave-logo.png');
    document.body.style.background = 'rgb(255, 255, 255)';
    myHeading.textContent = 'Is Brave even cooler?';
  } else {
    myImage.setAttribute('src', 'images/firefox-logo.png');
    document.body.style.background = '#FF9500';
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

function Hello(x) {
  const myHeading = document.querySelector('h1');
  myHeading.textContent = 'Hello World!';
}

function Return(x) {
  const myHeading = document.querySelector('h1');
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}*/

