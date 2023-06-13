
const loginForm =document.querySelector("#login-form");
const logInput = document.querySelector("#login-form input");
const greeting =document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
const saveUsername =localStorage.getItem(USERNAME_KEY);


const onLoginSubmit= (event) => {
    event.preventDefault(); 

    const userName = logInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME);

    localStorage.setItem(USERNAME_KEY,userName);
    paintGreeting({userName});
};

const paintGreeting = ({name})=>{
    greeting.innerText = `hello ${name}!!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(!saveUsername){
    //show the form

    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);

}else{
    // show the greeting
    
    paintGreeting({saveUsername})
};