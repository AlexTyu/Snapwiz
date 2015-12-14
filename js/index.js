$(document).on('touchstart click', '#bullet1', function(){
  $('#slide-wrapper').attr('class','slide1');
  $('#bullet1').addClass('active');
  $('#bullet2').removeClass('active');
  $('#bullet3').removeClass('active');
});

$(document).on('touchstart click', '#bullet2', function(){
  $('#slide-wrapper').attr('class','slide2');
  $('#bullet1').removeClass('active');
  $('#bullet2').addClass('active');
  $('#bullet3').removeClass('active');
});

$(document).on('touchstart click', '#bullet3', function(){
  $('#slide-wrapper').attr('class','slide3');
  $('#bullet1').removeClass('active');
  $('#bullet2').removeClass('active');
  $('#bullet3').addClass('active');
});

$(document).on('touchstart click', '#bullet1-2', function(){
  $('#slide-wrapper2').attr('class','slide1');
  $('#bullet1-2').addClass('active');
  $('#bullet2-2').removeClass('active');
  $('#bullet3-2').removeClass('active');
});

$(document).on('touchstart click', '#bullet2-2', function(){
  $('#slide-wrapper2').attr('class','slide2');
  $('#bullet1-2').removeClass('active');
  $('#bullet2-2').addClass('active');
  $('#bullet3-2').removeClass('active');
});

$(document).on('touchstart click', '#bullet3-2', function(){
  $('#slide-wrapper2').attr('class','slide3');
  $('#bullet1-2').removeClass('active');
  $('#bullet2-2').removeClass('active');
  $('#bullet3-2').addClass('active');
});

$(document ).on( "mousemove", function( event ) {
  $('.parallax-0').css('transform', 'translate3d(0px,0px,0px)');
  $('.parallax-1').css('transform', 'translate3d(-'+ event.pageX / 90 + "px, -" + event.pageY / 90 + "px, 0px");
  $('.parallax-2').css('transform', 'translate3d(-'+ event.pageX / 70 + "px, -" + event.pageY / 90 + "px, 0px");
  $('.parallax-3').css('transform', 'translate3d(-'+ event.pageX / 30 + "px, -" + event.pageY / 90 + "px, 0px");
  $('.parallax-4').css('transform', 'translate3d(-'+ event.pageX / 10 + "px, -" + event.pageY / 90 + "px, 0px");
  $('.parallax-5').css('transform', 'translate3d(-'+ event.pageX / 5 + "px, -" + event.pageY / 90 + "px, 0px");
  $('.parallax-6').css('transform', 'translate3d(-'+ event.pageX / 5 + "px, -" + event.pageY / 90 + "px, 0px");
  $('.parallax-7').css('transform', 'translate3d(-'+ event.pageX / 5 + "px, -" + event.pageY / 90 + "px, 0px");
  $('.parallax-8').css('transform', 'translate3d(-'+ event.pageX / 5 + "px, -" + event.pageY / 90 + "px, 0px");
  $('.parallax-9').css('transform', 'translate3d(-'+ event.pageX / 5 + "px, -" + event.pageY / 90 + "px, 0px");
  $('.parallax-10').css('transform', 'translate3d(-'+ event.pageX / 30 + "px, -" + event.pageY / 90 + "px, 0px");
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $(".parallax-scroll-0").css('transform',  'translate3d(0px,' + 0 * scroll + 'px, 0px)');
  $(".parallax-scroll-1").css('transform',  'translate3d(0px,' + 0.1 * scroll + 'px, 0px)');
  $(".parallax-scroll-2").css('transform',  'translate3d(0px,' + 0.2 * scroll + 'px, 0px)');
  $(".parallax-scroll-3").css('transform',  'translate3d(0px,' + 0.3 * scroll + 'px, 0px)');
  $(".parallax-scroll-4").css('transform',  'translate3d(0px,' + 0.4 * scroll + 'px, 0px)');
  $(".parallax-scroll-5").css('transform',  'translate3d(0px,' + 0.5 * scroll + 'px, 0px)');
  $(".parallax-scroll-6").css('transform',  'translate3d(0px,' + 0.6 * scroll + 'px, 0px)');
  $(".parallax-scroll-7").css('transform',  'translate3d(0px,' + 0.7 * scroll + 'px, 0px)');
  $(".parallax-scroll-8").css('transform',  'translate3d(0px,' + 0.8 * scroll + 'px, 0px)');
  $(".parallax-scroll-9").css('transform',  'translate3d(0px,' + 0.9 * scroll + 'px, 0px)');
  $(".parallax-scroll-10").css('transform',  'translate3d(0px,-' + 1 * scroll + 'px, 0px)');
 });

 $(document).on('touchstart click', '.nav.next', function(){
   $('#products-slider').attr('class','state2');
 });

 $(document).on('touchstart click', '.nav.prev', function(){
   $('#products-slider').attr('class','state1');
 });
