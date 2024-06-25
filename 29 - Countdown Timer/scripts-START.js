const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');


let countdown;
console.log(timerDisplay)

function timer(seconds) {
    clearInterval(countdown)

    const now = Date.now();
    console.log(seconds)
    const then = now + seconds * 1000;
    displayTimeleft(seconds)
    displayEndTime(then)

    countdown = setInterval(() => {
        const secondLeft = Math.round((then - Date.now()) / 1000);
        if (secondLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeleft(secondLeft)
        console.log(secondLeft)
    }, 1000)
}

function displayTimeleft(secods) {
    const minutes = Math.floor(secods / 60)
    const seconds = secods % 60;
    const display = `${minutes}:${secods < 10 ? '0' : ''}${seconds}`

    timerDisplay.textContent = display;
    document.title = display;

}

function displayEndTime(timestamp) {
    const end = new Date(timestamp)
    const hour = end.getHours();
    const adjustedHour = `${hour > 12 ? hour - 12 : hour}`
    const minute = end.getMinutes();
    const adjustedMinutes = `${minute < 10 ? "0" : ""}${minute}`
    endTime.textContent = `Be back at ${adjustedHour}:${adjustedMinutes}`

}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds)
}

buttons.forEach(button => button.addEventListener('click', startTimer))

document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
});