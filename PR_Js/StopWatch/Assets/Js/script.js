let timer = document.getElementById('timer');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let stopAt = document.getElementById('StopTime');
let interval = null;
let num = 0;
let second = 0;
let minute = 0;
let hour = 0;

timer.innerText = `${hour} : ${minute} : ${second}`;

start.addEventListener("click", () => {
    reset.classList.add('d-block');
    reset.classList.remove('d-none');

    interval = setInterval(() => {
        second += 1;
        timer.innerText = `${hour} : ${minute} : ${second}`;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 59) {
            hour++;
            minute = 0;
        }
    }, 1000);
});
stop.addEventListener("click", () => {
    clearInterval(interval);
    num++;
    stopAt.innerHTML +=
    `<p class "text-center text-bg-info">${num}. Stop At ${hour} : ${minute} : ${second}.`;
    stopAt.classList.add('d-block');
    stopAt.classList.remove('d-none');
});
reset.addEventListener("click", () => {
    second = 0;
    minute = 0;
    hour = 0;
    timer.innerText = `${hour} : ${minute} : ${second}`;
    reset.classList.add('d-none');
    reset.classList.remove('d-block');
    stopAt.innerHTML = "";
    
})