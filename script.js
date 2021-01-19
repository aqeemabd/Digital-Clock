function showTime(){
    var date = new Date()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    var session = "A.M."

    if(hours >= 12){
        hours = hours - 12
        session = "P.M."
    }


    if(hours == 0){
        hours = 12
    }

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds


    var time = hours + ":" + minutes + ":" + seconds + " " + session
    document.getElementById("myClockDisplay").innerText = time
    document.getElementById("myClockDisplay").textContent = time

    setTimeout(showTime, 1000)
}

showTime()
// setInterval(showTime, 1000)
