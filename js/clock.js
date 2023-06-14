const clock = document.querySelector("h2#clock");

const getClock=()=>{
    const date = new Date();

    //toString()이 아닌 String()으로 string type으로 만들었다.
    const hours = String(date.getHours()).padStart(2,"0");

    const minutes = String(date.getMinutes()).padStart(2,"0");

    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
};

getClock();

setInterval(getClock,1000);

