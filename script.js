// 要素を取得する
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

// 新年の日時
const newYears = '2021 6 21';

function countDown() {
  const newYearsDate = new Date(newYears);
  const currentData = new Date();

  // 残りの時間を計算
  const totalSeconds = (newYearsDate - currentData) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

// 表示形式を整形する
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countDown, 1000);