document.addEventListener('DOMContentLoaded', function() {
  var body = document.body;
  if (body.getAttribute('data-md-color-scheme') === 'slate') {
    Logic.setDarkMode(true);
  } else if (body.getAttribute('data-md-color-scheme') === 'default') {
    Logic.setDarkMode(false);
  }
  var darkInput = document.querySelector('input[data-md-color-media="(prefers-color-scheme: dark)"]');
  var lightInput = document.querySelector('input[data-md-color-media="(prefers-color-scheme: light)"]');
  darkInput.addEventListener('change', function() {
    Logic.setDarkMode(true);
  });
  lightInput.addEventListener('change', function() {
    Logic.setDarkMode(false);
  });
});
