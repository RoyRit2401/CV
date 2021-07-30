var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

$(".js--wp-1").waypoint(
  function (direction) {
    $(".js--wp-1").addClass("animate__fadeInLeft opacity");
  },
  {
    offset: "50%",
  }
);
$(".js--wp-2").waypoint(
  function (direction) {
    $(".js--wp-2").addClass("animate__fadeInRight opacity");
  },
  {
    offset: "50%",
  }
);
$(".js--wp-3").waypoint(
  function (direction) {
    $(".js--wp-3").addClass("animate__fadeInUp opacity");
  },
  {
    offset: "50%",
  }
);
$(".js--wp-4").waypoint(
  function (direction) {
    $(".js--wp-4").addClass("animate__fadeInUp opacity");
  },
  {
    offset: "50%",
  }
);
$(".js--wp-5").waypoint(
  function (direction) {
    $(".js--wp-5").addClass("animate__fadeInUp opacity");
  },
  {
    offset: "50%",
  }
);
$(".js--wp-6").waypoint(
  function (direction) {
    $(".js--wp-6").addClass("animate__pulse opacity");
  },
  {
    offset: "50%",
  }
);
$(".js--wp-7").waypoint(
  function (direction) {
    $(".js--wp-7").addClass("animate__backInUp");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-7").waypoint(
  function (direction) {
    $(".js--wp-7").addClass("animate__backInUp");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-skills").waypoint(
  function (direction) {
    $(".js--wp-skills").addClass("animate__bounceInUp opacity ");
  },
  {
    offset: "50%",
  }
);
