const newYears = "1 Jan 2023";

// defines
const dayTxt = document.getElementById("days");
const hourTxt = document.getElementById("hours");
const minTxt = document.getElementById("mins");
const secTxt = document.getElementById("seconds");

function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  // allSecs
  const tempData = (newYearsDate - currentDate) / 1000;

  //The Math. floor() function returns the largest integer less than or equal to a given number.

  // seconds turn to days
  const day = Math.floor(tempData / 3600 / 24);
  // seconds turn to hours
  const hour = Math.floor((tempData / 3600) % 24);
  // seconds turn to mins
  const min = Math.floor((tempData / 60) % 60);
  // seconds turn to secs
  const sec = Math.floor(tempData % 60);

  dayTxt.innerHTML = checkData(day);
  hourTxt.innerHTML = checkData(hour);
  minTxt.innerHTML = checkData(min);
  secTxt.innerHTML = checkData(sec);

  function checkData(temp) {
    return temp < 10 ? "0" + temp : temp;
  }
}
// call
countDown();

// The setInterval() function is commonly used to set a delay for functions that are executed again and again.
setInterval(countDown, 1000);
