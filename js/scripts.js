$(document).ready(function() {
  $(".javascript-content .clickable").click(function() {
    $(".javascript-content .hidden-content").toggle();
    $(".javascript-content .shown-content").toggle();
  });

  $(".operator-content .clickable").click(function() {
    $(".operator-content .hidden-content").toggle();
    $(".operator-content .shown-content").toggle();
  });
});