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

function replacer(match, indent, key, val, end) {
  var body = '';

  if (key) {
    var span = document.createElement('span');
    span.setAttribute('class', 'json key');
    span.innerHTML = key.replace(/[": ]/g, '') + ': ';
    body += span.outerHTML;
  }

  if (val) {
    var type;

    switch (typeof eval(val)) {
      case 'string': type = 'str'; break;
      case 'boolean': type = 'bool'; break;
      case 'number': type = 'val'; break;
      default: type = 'none'; break;
    }

    if (/(https?:\/\/[^\s]+)|.\/assets/g.test(val)) {
      val = val.replace(/"/g, '');

      var a = document.createElement('a');
      a.setAttribute('href', val);
      a.innerHTML = /.\/assets/g.test(val) ? val.substr(val.lastIndexOf('/') + 1) : val;

      val = '"' + a.outerHTML + '"';
    }

    var span = document.createElement('span');
    span.setAttribute('class', 'json ' + type);
    span.innerHTML = val;
    body += span.outerHTML;
  }

  return (indent || '') + body + (end || '');
}

function prettyPrint(obj) {
  var re = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
  return JSON.stringify(obj, null, 2).replace(/&/g, '&amp;')
                                     .replace(/\\"/g, '&quot;')
                                     .replace(/</g, '&lt;')
                                     .replace(/>/g, '&gt;')
                                     .replace(re, replacer);
}

function hide() {
  var shown = document.querySelector('.terminal').style.display === 'block';

  if (document.querySelector('.terminal').style.maxWidth === '100vw')
    toggle();

  document.querySelector('.activateBtn').style.display = shown ? 'block' : 'none';
  document.querySelector('.terminal').style.display = shown ? 'none' : 'block';
}

function toggle() {
  if (document.querySelector('.terminal').style.display !== 'block' || !document.querySelector('.code'))
    return;

  var elements = [
    { selector: '.container', declarations: { padding: '0px' } },
    { selector: 'main', declarations: { paddingTop: '0px', paddingBottom: '0px' } },
    { selector: 'header', declarations: { display: 'none' } },
    { selector: '.terminal', declarations: { maxWidth: '100vw' } },
    { selector: '.code', declarations: { maxHeight: '95vh' } }
  ];

  elements.forEach(function(o) {
    var el = document.querySelector(o.selector);
    var declarations = o.declarations;

    for (var d in declarations)
      el.style[d] = el.style[d] === declarations[d] ? '' : declarations[d];
  });
}

function toggleMin() {
  if (document.querySelector('.terminal').style.display !== 'block' || !document.querySelector('.code'))
    return;

    var elements = [
      { selector: '.terminal', declarations: { maxWidth: '25vw', position: 'absolute', bottom: '0', marginBottom: '10px' } },
      { selector: '.code', declarations: { display: 'none' } }
    ];
  
    elements.forEach(function(o) {
      var el = document.querySelector(o.selector);
      var declarations = o.declarations;
  
      for (var d in declarations)
        el.style[d] = el.style[d] === declarations[d] ? '' : declarations[d];
    });

    if (document.querySelector('.terminal').style.bottom == '0' || document.querySelector('.code').style.display == 'none'){
      let removeTog = document.getElementById('max').removeEventListener('click', toggle);
      let removeHide = document.getElementById('close').removeEventListener('click', hide);
      let hideBtn = document.querySelector('.activateBtn').style.display = 'none';

      return {
        removeTog,
        removeHide,
        hideBtn
      };

    } else {
      let addTog = document.getElementById('max').addEventListener('click', toggle);
      let addHide = document.getElementById('close').addEventListener('click', hide);

      return {
        addTog,
        addHide
      };
    }
}

function activateTerminal() {
  let shown = document.querySelector('.terminal').style.display = 'block';
  let hideBtn = document.querySelector('.activateBtn').style.display = 'none';
  
  return {
    shown,
    hideBtn
  };
}

function init() {
  loadJson('./assets/docs/iimeli.json', function(err, res) {
    if (err || !res) {
      document.querySelector('.activateBtn').style.display = 'block';
      document.querySelector('.terminal').style.display = 'none';
      return;
    }

    for (var k in res)
    document.getElementById(k + '-json').innerHTML = prettyPrint(res[k]);
    document.querySelector('.terminal').style.display = 'block';

    document.querySelector('.close').addEventListener('click', hide, false); 
    document.querySelector('.maximize').addEventListener('click', toggle, false);
    document.querySelector('.minimize').addEventListener('click', toggleMin, false);
    document.querySelector('button').addEventListener('click', activateTerminal, false);
  });
}

window.addEventListener('load', init);