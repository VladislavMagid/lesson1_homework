const timer = document.querySelector(".timer");

const timerFunc = () => {
  let count = 60;

  const updateTimer = () => {
    timer.textContent = count;
    count--;

    if (count < 0) {
      clearInterval(timerId);
    }
  };
  const timerId = setInterval(updateTimer, 1000);
};

timerFunc();
