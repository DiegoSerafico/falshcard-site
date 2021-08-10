$(document).ready(function() {
  $(".javascript-content .clickable").click(function() {
    $(".javascript-content .hidden-content").toggle();
    $(".javascript-content .shown-content").toggle();
  });

  $(".operator-content .clickable").click(function() {
    $(".operator-content .hidden-content").toggle();
    $(".operator-content .shown-content").toggle();
  });

  $(".variable-content .clickable").click(function() {
    $(".variable-content .hidden-content").toggle();
    $(".variable-content .shown-content").toggle();
  });

  $(".function-content .clickable").click(function() {
    $(".function-content .hidden-content").toggle();
    $(".function-content .shown-content").toggle();
  });

  $(".method-content .clickable").click(function() {
    $(".method-content .hidden-content").toggle();
    $(".method-content .shown-content").toggle();
  });
});