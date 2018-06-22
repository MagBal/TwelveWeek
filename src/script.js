//carousel
$(function() {
  const slideCount = $("#carousel ul li").length;
  const slideWidth = $("#carousel ul li").width();
  const slideHeight = $("#carousel ul li").height();
  const sliderUlWidth = slideCount * slideWidth;

  $("#carousel").css({ width: slideWidth, height: slideHeight });
  $("#carousel ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });
  $("#carousel ul li:last-child").prependTo("#carousel ul");

  function moveLeft() {
    $("#carousel ul").animate(
      {
        left: +slideWidth
      },
      400,
      function() {
        $("#carousel ul li:last-child").prependTo("#carousel ul");
        $("#carousel ul").css("left", "");
      }
    );
  }

  function moveRight() {
    $("#carousel ul").animate(
      {
        left: -slideWidth
      },
      400,
      function() {
        $("#carousel ul li:first-child").appendTo("#carousel ul");
        $("#carousel ul").css("left", "");
      }
    );
  }

  $(".prev").click(function() {
    moveLeft();
  });

  $(".next").click(function() {
    moveRight();
  });
});

//columns highlighting
function colHigh() {
  if (/colHigh/.test(window.navigator.userAgent.toLowerCase())) {
    const tds = document.getElementsByTagName("td"),
      ths = document.getElementsByTagName("th");
    for (let index = 0; index < tds.length; index++) {
      tds[index].innerHTML =
        '<div class="col-high">' + tds[index].innerHTML + "</div>";
    }
    for (let index = 0; index < ths.length; index++) {
      ths[index].innerHTML =
        '<div class="' +
        ths[index].className +
        '">' +
        ths[index].innerHTML +
        "</div>";
      ths[index].className = "";
    }
    const style =
      "<style>" +
      "td, th { padding: 0 !important; }" +
      "td:hover::after { background-color: transparent !important; }" +
      "</style>";
    document.head.insertAdjacentHTML("beforeEnd", style);
  }
}
colHigh();
