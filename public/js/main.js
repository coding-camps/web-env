function ajax(url, callback) {
  let xhr;
  if (window.XMLHttpRequest) {
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xhr = new XMLHttpRequest();
  } else {
    // IE6, IE5 浏览器执行代码
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }

  xhr.open('GET', url, false);

  xhr.onreadystatechange = function () {
    switch (this.readyState) {
      case 4:
        callback(xhr.response);
        break;
    }
  };

  try {
    xhr.send();
  } catch (err) {
    callback(err.message);
  }
}

ajax('http://localhost:3000', (msg) => {
  document.getElementById('ajax-msg').innerHTML = msg;
});
