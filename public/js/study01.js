window.onload = function () {
    
  var min = "00";
	var sec = "00";
	var msec = "00";
	var elemMin = document.getElementById("min");
	var elemSec = document.getElementById("sec");
	var elemMsec = document.getElementById("msec");
	var bStart = document.getElementById("start");
	var bStop = document.getElementById("stop");
	var bRestart = document.getElementById("restart");
	var Interval;

  bStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(timer, 10);
  }
  bStop.onclick = function() {
    clearInterval(Interval)
  }
  bRestart.onclick = function() {
    clearInterval(Interval);
    sec = "00";
    msec = "00";
    elemMsec.innerHTML = msec;
    elemSec.innerHTML = sec;
    }

  function timer () {
    msec++;

    if(msec <= 9){
      elemMsec.innerHTML = "0" + msec;
      }
    if(msec > 9){
      elemMsec.innerHTML = msec;
    }
    if (msec > 99) {
      console.log("sec");
      sec++;
      elemSec.innerHTML = "0" + sec;
        msec = 0;
        elemMsec.innerHTML = "0" + 0;
    }
    if(sec > 9){
      elemSec.innerHTML = sec;
    }
    if(sec > 59){
      console.log("min");
      min++;
      elemMin.innerHTML = "0" + min;
      sec = 0;
      elemSec.innerHTML = "0" + 0;
    }
    if(min > 9){
      elemMin.innerHTML = min;
    }
  }
}
