// the slideshow codes
var delay=3;

var slides=document.getElementsByClassName('slide').length;
var current=1;
var timer = setTimeout(nextSlide, delay*1000);

function nextSlide() {
  var next = (current == slides ? 1 : current + 1);
  $('slide' + current).classList.remove('display');
  $('slide' + next).classList.add('display');

  current = next;
  timer = setTimeout(nextSlide, delay*1000);
}

function slideshowNext() {
  slideshowPause();

  var next = (current == slides ? 1 : current + 1);
  $('slide' + current).classList.remove('display');
  $('slide' + next).classList.add('display');
  current = next;

  return(false);
}

function slideshowPrevious() {
  slideshowPause();

  var prev = (current == 1 ? slides : current - 1);
  $('slide' + current).classList.remove('display');
  $('slide' + prev).classList.add('display');
  current = prev;

  return(false);
}

function slideshowPause() {
  clearTimeout(timer);
  timer = false;
  $('pause').classList.add('hidden');
  $('play').classList.remove('hidden');
  return(false);
}

function slideshowPlay() {
  $('pause').classList.remove('hidden');
  $('play').classList.add('hidden');
  nextSlide();
  return(false);
}

function showControls(slideshow) {
  slideshow.children[0].classList.remove('hidden');
}

function hideControls(slideshow) {
  if (timer) {
    slideshow.children[0].classList.add('hidden');
  }
}

function $(id) {
  return(document.getElementById(id));
}

window.onload = function(){
$("#accordion").accordion();
};
