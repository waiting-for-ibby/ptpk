let favicon = document.getElementById('favicon');
let icons = ['favicon.png', 'favicon2.png'];
let index = 0;

setInterval(function() {
  index = (index + 1) % icons.length;
  favicon.href = icons[index];
}, 2000);