
const loginForm =document.querySelector("#login-form");
const logInput = document.querySelector("#login-form input");
const greeting =document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
const savedUsername =localStorage.getItem(USERNAME_KEY);

const onLoginSubmit= (event) => {
    event.preventDefault(); 

    const userName = logInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME);

    localStorage.setItem(USERNAME_KEY,userName);

    paintGreetings(userName);
};

const paintGreetings = (savedUsername)=>{
    
    greeting.innerText = `hello ${savedUsername}!!`;

    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(!savedUsername){
    //show the form

    loginForm.classList.remove(HIDDEN_CLASSNAME);

    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    // show the greeting
    paintGreetings(savedUsername);
};