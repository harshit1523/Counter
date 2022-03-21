var i = 0;

function col() {
  if (i > 0) {
    $("h2").css("color", "green");
  } else if (i < 0) {
    $("h2").css("color", "red");
  } else {
    $("h2").css("color", "black");
  }
}

$(".incBtn").click(function() {
  i++;
  col();
  $("h2").text(i);
});

$(".decBtn").click(function() {
  --i;
  col();
  $("h2").text(i);
});

$(".resetBtn").click(function() {
  i = 0;
  col();
  $("h2").text(i);
});
