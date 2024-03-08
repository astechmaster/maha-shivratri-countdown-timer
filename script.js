const shivratriDate = new Date("March 8 2024 00:00:00").getTime();

const countdownInterval = setInterval(function () {
  const now = new Date().getTime();
  const remainingTime = shivratriDate - now;
  // console.log(remainingTime);

  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Display the remaining time
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (remainingTime < 0) {
    document.getElementById("time").innerHTML = "Happy Maha Shivratri";
    clearInterval(countdownInterval);
  }
});
