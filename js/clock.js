const clock = document.querySelector("h2#clock");

const getClock=()=>{
    const date = new Date();

    // padStart()를 사용하기 위해으로 string type으로 만들어 주었다.

    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;

    console.log(`current Time: ${hours}:${minutes}:${seconds}`);
};
// 바로 실행되게 하여 00:00:00을 보여주지 않고 현재 시각을 보여주게한다.
getClock();
// 매초마다 현재시간으로 갱신해준다.
setInterval(getClock,1000);

