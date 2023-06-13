
const loginForm =document.querySelector("#login-form");
const logInput = document.querySelector("#login-form input");
const greeting =document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden"

const onLoginSubmit= (event) => {
    event.preventDefault(); 

    const userName = logInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME);

    greeting.innerHTML = `hello ${userName}!!`;

    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit",onLoginSubmit);