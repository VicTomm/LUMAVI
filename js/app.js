$(document).foundation()

// init controller
var controller = new ScrollMagic.Controller();

var tl = new TimelineMax();
var tlLogo = new TimelineMax();

var mockup = $(".mockup");
var mockups = $(".mockups");
var blue = $("#blue");
var red = $("#red");
var orange = $("#orange");
var points = $("#points");
var lumavi = $("#lumavi-text");

tlLogo
  .fromTo(blue, 1, { opacity: 0, y: '-=100' }, { opacity: 1, y: '0' }, 1)
  .fromTo(red, 1, { opacity: 0, y: '+=100' }, { opacity: 1, y: '0' }, '-=1')
  .fromTo(orange, 1, { opacity: 0, x: '+=100' }, { opacity: 1, x: '0' }, '-=1')
  .fromTo(points, 1, { opacity: 0 }, { opacity: 1 })
  .fromTo(lumavi, 1, { opacity: 0, x: '+=100' }, { opacity: 1, x: '0' });

var tween = tl
  .fromTo(mockup, 1, { opacity: 0 }, { opacity: 1 })
  .fromTo(mockups[0], 0.5, { opacity: 0, x: '-=200' }, { opacity: 1, x: '0' })
  .fromTo(mockups[1], 0.5, { opacity: 0, x: '+=200' }, { opacity: 1, x: '0' })
  .fromTo(mockups[2], 0.5, { opacity: 0 }, { opacity: 1 })
  .fromTo(mockups[3], 0.5, { opacity: 0 }, { opacity: 1 }, '-=0.3')
  .fromTo(mockups[4], 0.5, { opacity: 0 }, { opacity: 1 }, '-=0.3')
  .fromTo(mockups[5], 0.5, { opacity: 0 }, { opacity: 1 }, '-=0.3')
  .fromTo(mockups[6], 0.5, { opacity: 0, x: '-=200' }, { opacity: 1, x: '0' }, '-=0.5')
  .fromTo(mockups[7], 0.5, { opacity: 0, x: '+=200' }, { opacity: 1, x: '0' }, '-=0.5')
  .fromTo(mockups[8], 0.5, { opacity: 0, y: '+=100' }, { opacity: 1, y: '0' })
  .fromTo(mockups[9], 0.5, { opacity: 0, y: '+=100' }, { opacity: 1, y: '0' });

// build scene
var scene = new ScrollMagic.Scene({
  triggerElement: "#services"
})
  .setTween(tween)
  .addTo(controller);

function menu() {
  var burger = document.querySelector('.hamburger');
  var navList = document.querySelector('.nav-list');

  burger.addEventListener('click', function (e) {
    e.preventDefault();
    burger.classList.toggle('menu--active');
    navList.classList.toggle('list__active');
  });
}

menu();

$(window).scroll(function () {
  if ($(this).scrollTop() > 695) {
    $("#nav").fadeIn('slow');
    $("#lumavi-logo").fadeIn('slow');
  } else {
    $("#nav").fadeOut('slow');
    $("#lumavi-logo").fadeOut('slow');
  }
});