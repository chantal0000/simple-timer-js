function updateTimer() {
    let future = Date.parse("Nov 30, 2022 11:30:00")
    let now = new Date(); /*calling the now time with the entire format */
    let timeDifference = future - now; /*substraction needed to calculate the days/hours/min/second value that will be implemented in the html */
    console.log(timeDifference) /* testing the date call */
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(timeDifference / (1000 * 60 * 60));
    var minutes = Math.floor(timeDifference / (1000 * 60));
    var seconds = Math.floor(timeDifference / 1000);
    console.log(days + "\n" + hours + "\n" + minutes + "\n" + seconds)
    let dayTime = days;
    let hourTime = hours - days * 24;
    let minuteTime = minutes - hours * 60;
    let secondsTime = seconds - minutes * 60;

    console.log(dayTime + "\n" + hourTime + "\n" + minuteTime + "\n" + secondsTime)

    document.getElementById("timer").innerHTML =
        '<div>' + dayTime + '<span> Days</span></div>' +
        '<div>' + hourTime + '<span> Hours</span></div>' +
        '<div>' + minuteTime + '<span> Minutes</span></div>' +
        '<div>' + secondsTime + '<span> Seconds</span></div>'
    ;
}

setInterval('updateTimer()', 1000
); /* 1000 so it updates every second */

