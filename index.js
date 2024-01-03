var second = 0;
var minute = 0;
var startIntervalId;
var startTime, endTime;
var lapTime;

var timer = minute +" : " + second

document.getElementById('timer-display').innerHTML = timer;

function startTimer(){
    
    startIntervalId = setInterval(() => {
        second += 1;
        document.getElementById('timer-display').innerHTML = minute +" : " + second;

        if(second == 60)
        {
            second = 0;
            minute += 1;
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(startIntervalId);
}

function resetTimer(){
    stopTimer();
    second = minute = 0;
    document.getElementById('timer-display').innerHTML = minute +" : " + second;
}

function lapTimer(){
    startTime = startTimer();
    endTime = stopTimer();

    lapTime = endTime - startTime;

    console.log("Lap Time " + `$(lapTime)`);
        
    document.getElementById('timer-display').innerHTML = minute +" : " + second;
    
}
