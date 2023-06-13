

const logInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const onLoginBtnClick=()=>{
    const userName = logInput.value
    console.log(userName)
    // !userName || userName.length >= 15 
    //     ? alert("please write no more than 1 to 15 words") 
    //     : alert("hello",userName);
}

const onPressEnter =(e)=>{
    if(e.key === "Enter"){
        onLoginBtnClick()
    }
}

loginButton.addEventListener("click",onLoginBtnClick)
logInput.addEventListener("keypress",onPressEnter)