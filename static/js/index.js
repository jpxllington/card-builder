
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