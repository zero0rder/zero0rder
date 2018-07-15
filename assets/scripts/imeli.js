'use strict';

function loadJson(uri, cb) {
  var xhr = new XMLHttpRequest;
  xhr.open('get', uri, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var status = xhr.status;

      if (status !== 200)
        return cb(status);

      try {
        return cb(null, JSON.parse(xhr.responseText));
      } catch (e) {
        return cb(e);
      }
    }
  };
  xhr.send();
}

function init() {}

window.addEventListener('load', init);