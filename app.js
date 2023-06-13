
const loginForm =document.querySelector("#login-form")
const logInput = document.querySelector("#login-form input");


const onLoginSubmit= (info) => {
   
    // submit의 기본동작은 새로고침인데 이때문에 입력받은 정보를 받아올수 없다.
    // 브라우저의 기본동작을 막아야하는데 이를 도와주는 매서드가 있다.
    info.preventDefault(); 
    // 브라우저의 기본동작을 막는 매서드이다.
    const userName = logInput.value;
    console.log(`hello ${userName}`);
}

loginForm.addEventListener("submit",onLoginSubmit)


