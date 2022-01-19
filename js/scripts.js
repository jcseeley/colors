$(document).ready(function() {
  $("button#green").click(function() {
    $("body").css("background-color", "green");
  });

  $("button#yellow").click(function() {
    $("body").css("background-color", "yellow");
  });

  $("button#red").click(function() {
    $("body").css("background-color", "red");
  });

  $("button#reset").click(function() {
    $("body").css("background-color", "");
  });
});
