import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import mainPage from './home';
import layout from './menu';
import info from './contact';
import navcon from './navigate';


console.log("hello")



// document.body.appendChild(mainPage());
// document.body.appendChild(layout());
// document.body.appendChild(info());

function displayHome() {
    const content = document.getElementById("content");
    console.log(document)
    console.log(content);
    content.innerHTML = ""
    content.appendChild(mainPage());
}

function displayMenu() {
    const content = document.getElementById("content");
    console.log(document)
    console.log(content);
    content.innerHTML = ""
    content.appendChild(layout());
}

function displayInfo() {
    const content = document.getElementById("content");
    console.log(document)
    console.log(content);
    content.innerHTML = ""
    content.appendChild(info());
}


const nav1 = document.getElementById("nav");
nav1.appendChild(navcon());



// displayHome()
displayMenu();
// displayInfo();

const homediv = document.getElementById("Home")
homediv.onclick = function() {displayHome()}
const mdiv = document.getElementById("Menu")
mdiv.onclick = function() {displayMenu();}
const cdiv = document.getElementById("Contact")
cdiv.onclick = function() {displayInfo()}