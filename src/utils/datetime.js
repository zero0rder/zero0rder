// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
//todo: setup interval so that time updates ~60s | react hooks setInterval & clearInterval or vanilla JS
export const dateTime = new Date().toLocaleString('en-US', { weekday: 'short', hour: '2-digit', minute: '2-digit'});

