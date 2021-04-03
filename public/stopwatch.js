let miliseconds = 0;
let seconds = 0;

let displaySeconds = 0;
let displayMilisecons = 0;

let interval = null;
let status = "stopped";

function stopWatch(){

    miliseconds++;

    if(miliseconds % 6 === 0){
        miliseconds++;
    }

    if(miliseconds % 10 === 0){
        miliseconds++;
        miliseconds++;
    }

    if(miliseconds % 8 === 0){
        miliseconds++;
    }

    if(miliseconds / 99 === 1){
     miliseconds = 0;
     seconds++;
    }

    if(miliseconds < 10){
     displayMiliseconds = "0" + miliseconds.toString();
    }
    else{
     displayMiliseconds = miliseconds;
    }
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    document.getElementById("display").innerHTML = displaySeconds + ":" + displayMiliseconds;

}



function startStop(){

    if(status === "stopped"){

        interval = window.setInterval(stopWatch, 10);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    }
    else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";

    }

}

function reset(){

    window.clearInterval(interval);
    miliseconds = 0;
    seconds = 0;
    document.getElementById("display").innerHTML = "00:00";
}