const element = document.querySelector('.element');
var textToShow = 'Hey, this is important.', textToShow2 = 'Hey, this is important 2.';

// ES5
element.innerHTML = '\
<div class="popup">\
  <span>' + textToShow + textToShow2+'</span>\
</div>';

// ES6
element.innerHTML = `
<div class="popup">
  <span>${textToShow+textToShow2}</span>
</div>`;