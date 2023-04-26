const timer = document.querySelector('.timer')
const button = document.querySelector('button')
const minutesSpan = document.querySelector('.minutes')
const secondsSpan = document.querySelector('.seconds')
const state = document.querySelector(".state")

let minutes = 0
let seconds = 5
intervalRunning = false;
let workTime;
minutesSpan.textContent = String(minutes).padStart(2, 0)
secondsSpan.textContent = String(seconds).padStart(2, 0)
button.textContent = 'Play'

let interval;

const StartPomodoro = () => {

    if (!intervalRunning) {
        button.textContent = 'Pause'
        interval = setInterval(pomodoroInterval, 1000)

        workTime = true
        function pomodoroInterval() {

            seconds--

            if (seconds == 0 && minutes == 0) {
                workTime = !workTime
                console.log(workTime);
                if (!workTime) {
                    minutes = 15
                    state.textContent = 'Break'
                    console.log(workTime);
                }
            }

            if (seconds == 0) {
                minutes--
                seconds = 59

            }



            minutesSpan.textContent = String(minutes).padStart(2, 0)
            secondsSpan.textContent = String(seconds).padStart(2, 0)



        }
        intervalRunning = !intervalRunning
    } else {
        clearInterval(interval)
        button.textContent = 'Play'
        intervalRunning = !intervalRunning
    }
}

button.addEventListener('click', StartPomodoro)