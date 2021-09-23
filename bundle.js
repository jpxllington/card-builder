(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

async function changeBackground(theme) {
    height= window.screen.availHeight;
    width=window.screen.availWidth;
    const response = await fetch(`https://source.unsplash.com/featured/${width}x${height}/?${theme}`);
    document.querySelector('body').style.backgroundImage = `url("${response.url}")`;
}

module.exports= { changeBackground }
},{}],2:[function(require,module,exports){

const api = require("./api")

const cardForm = document.querySelector('form');
const requestCard = () => new Promise(buildCard)

cardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    let greeting = e.target.greeting.value;
    let message = e.target.message.value;
    let theme = e.target.type.value;
    document.querySelector("#title").style.display = "none";
    document.querySelector('form').style.display = "none";
    document.querySelector(".greeting").textContent = greeting;
    document.querySelector(".message").textContent = message;
    document.querySelector('section').style.display = 'block';
    
    // requestCard("greeting":greeting, "message":message)
    // .catch(err => alert(err))
    
    api.changeBackground(theme)
});

function buildCard(res,rej,greeting,message) {
    try {
        res()
    } catch(err) {
        rej(err)
    }

}
},{"./api":1}]},{},[2]);
