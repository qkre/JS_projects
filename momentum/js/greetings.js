// # = id, . = class
const loginForm = document.querySelector('#login-form');
const greeting = document.querySelector("#greeting")

// document에서 바로 찾는 방법 : document.querySelector("#login-form input")
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'userName'

function onLoginSubmit(event){
    event.preventDefault()
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
}

function paintGreetings(userName){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${userName}!`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY)

if(savedUserName === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUserName);
}