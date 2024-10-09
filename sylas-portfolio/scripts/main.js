const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/sylas.jpg")
    myImage.setAttribute("src", "images/sylas2.jpg");
  else
    myImage.setAttribute("src", "images/sylas.jpg");
}

let userButton = document.getElementById("user");
let sectionButton = document.getElementById("paragraph") 
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name");
  if (!myName) {
    setUserName();
  }
  else {
  localStorage.setItem("name", myName);
  myHeading.textContent = `Sylas is cool, ${myName}`;
  }
}

function addParagraph() {
  const par = document.createElement("p");
  const text = prompt("What do you want to say?")
  par.textContent = text;
  document.body.appendChild(par);
}
sectionButton.onclick = addParagraph;

const storedName = localStorage.getItem("name");
if(!storedName) {
  setUserName();
}
else
{
  myHeading.textContent = `Sylas is cool, ${storedName}`;
}
userButton.onclick = setUserName;


