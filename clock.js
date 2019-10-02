const clockContainer = document.querySelector(".js-clock");
const clockTittle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const month = date.getMonth();
  const dates = date.getDate();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTittle.innerText = `${hours < 10 ? `0${hours}` : hours} ${
    minutes < 10 ? `0${minutes}` : minutes
  } ${seconds < 10 ? `0${seconds}` : seconds}`;
  // seconds 파트에서 ?는 if와 같은 의미를 지닌다. 즉, 초가 10보다 작다면? 0과 초를 같이 내보내서
  // 03 과같은 형태로 출력되게 하며  :는 else를 의미하며 seconds만 출력되게한다.
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  // setinterval은 (함수,변화할시간) 의 형태를 가지며 위 같은 경우는 시간을 1초마다 변경해서
  // 보여주는 기능을 한다.
}

init();
