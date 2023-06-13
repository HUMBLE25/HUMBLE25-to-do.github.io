
const loginForm =document.querySelector("#login-form");
const logInput = document.querySelector("#login-form input");

const link =document.querySelector("a");

const onLoginSubmit= (event) => {
    event.preventDefault(); 
    const userName = logInput.value;
    console.log(`hello ${userName}`);
}

const handleLinkClick= (event)=>{
    event.preventDefault();
    console.dir(event);

}

loginForm.addEventListener("submit",onLoginSubmit)
link.addEventListener("click",handleLinkClick)

// 이벤트리스너의 두번째 인자로 들어가는 함수는 브라우저가 실행시켜준다.
// 그리고 방금 일어난 이벤트 정보를 객체로 담아준다.


