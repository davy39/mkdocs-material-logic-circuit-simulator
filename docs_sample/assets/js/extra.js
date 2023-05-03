$(document).ready(function() {
    // Check out what theme is set when loading the page
    if ($('body').attr('data-md-color-scheme') === 'slate') {
        Logic.setDarkMode(true);
    };
    if ($('body').attr('data-md-color-scheme') === 'default') {
        Logic.setDarkMode(false);
      };
    // Toggle if theme changed
    $('input[data-md-color-media="(prefers-color-scheme: dark)"]').change(function() {
        Logic.setDarkMode(true);
    });
    $('input[data-md-color-media="(prefers-color-scheme: light)"]').change(function() {
        Logic.setDarkMode(false);
    });
});
