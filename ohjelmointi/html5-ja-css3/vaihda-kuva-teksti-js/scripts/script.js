let myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'img/firefox.png') {
    myImage.setAttribute('src', 'img/brave.png');
    document.body.style.background = 'rgb(255, 255, 255';
    myHeading.textContent = 'Is Brave even cooler?';
  } else {
    myImage.setAttribute('src', 'img/firefox.png');
    document.body.style.background = '#fca42a';
    if (!localStorage.getItem('name')) {
      setUserName();
    } else {
      let displayName = localStorage.getItem('name');
      myHeading.textContent = 'Mozilla is cool, ' + displayName;
    }
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  console.log(myName.length);
  if (myName !== null && myName.length > 0) {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  } else {
    setUserName();
  }
}
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let displayName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + displayName;
}

myButton.onclick = function () {
  setUserName();
}
function Return(x) {
  const myHeading = document.querySelector('h1');
  let displayName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + displayName;
}
