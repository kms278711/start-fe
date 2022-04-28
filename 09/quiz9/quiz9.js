const $url = document.querySelector('#url');
const $btn = document.querySelector('#btn');
const $log = document.querySelector('#log');

function printLog(str) {
  $log.value = str;
}
function success(result) {
  result.text().then(printLog);
}
function fail(error) {
  printLog(error);
}

function fetchUrl() {
  const url = $url.value;
  printLog('');
  if (url) {
    fetch(url).then(success).catch(fail);
  } else {
    window.alert('url를 입력하세요');
  }
}

// 13 == enter
function checkSubmit(e) {
  if (e.keyCode === 13) {
    fetchUrl();
  }
}
function init() {
  $btn.addEventListener('click', fetchUrl);
  $url.addEventListener('keypress', checkSubmit);  
}

init();