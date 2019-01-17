var t1 = new TimelineMax({paused: true});

t1.to(".overlay", 1.6, {

  top: 0,
  ease: Expo.easeInOut

});

t1.staggerFrom(".menu ul li", 1, {y: 100, opacity: 0, ease: Expo.easeOut}, 0.1);

t1.reverse();
$(document).on("click", ".menu-btn", function() {
  t1.reversed(!t1.reversed());
});

t1.reverse();
$(document).on("click", "li", function() {
  t1.reversed(!t1.reversed());
});
