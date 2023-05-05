  const hoursInput = document.getElementById('hours');
  const minutesInput = document.getElementById('minutes');
  const secondsInput = document.getElementById('seconds');
  const startBtn = document.getElementById('start-timer');

  const alertSound = document.getElementById('alert-sound');

  
  let countdown = null;
  function startTimer() {
    
    startBtn.disabled = true;
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    let remainingSeconds = totalSeconds;
    countdown = setInterval(() => {
      remainingSeconds--;
      if (remainingSeconds <= 0) {
    
        clearInterval(countdown);
        alertSound.play();
        
        window.alert('Timer expired!');
        
        startBtn.disabled = false;
      } else {
        const hours = Math.floor(remainingSeconds / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = remainingSeconds % 60;
        const timeDisplay = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('time-display').textContent = timeDisplay;
      }
    }, 1000);
  }
  startBtn.addEventListener('click', startTimer);