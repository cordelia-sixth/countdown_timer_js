// 要素を取得する
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

//  目標としたい日時
const target = '2022 1 1';

function countDown() {
  // 目標日時
  const targetDate = new Date(target);
  // 現在
  const currentDate = new Date();

  // 残りの時間を計算
  // ミリ秒を秒になおす
  const totalSeconds = (targetDate - currentDate) / 1000;

  // 日 = 残り時間(秒) / 3600秒(1時間)ここで時間の単位に変換している / 24時間(1日)
  const days = Math.floor(totalSeconds / 3600 / 24);

  // 時間　= (残り時間(秒) / 3600秒(1時間) を24時間から溢れたものが残り時間
  const hours = Math.floor(totalSeconds / 3600) % 24;
  
  // 分 = (残り時間(秒) / 60秒(1分)ここで分の単位に変換している) を60分(1時間)の中から溢れたものが残りの分
  const mins = Math.floor(totalSeconds / 60) % 60;

  // 秒 = 60秒から溢れたものが残りの秒
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