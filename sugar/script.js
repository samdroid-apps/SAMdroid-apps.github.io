var sel;

function hide_hints() {
  var hints;
  hints = $('.hint');
  hints.hide();
};

function show_hints() {
  var hints;
  hints = $('.hint');
  hints.show();
};

function continue_home() {
  var vid, info;
  vid = document.getElementById(sel + '-video');
  vid.play();
  vid.addEventListener('ended', function(event) {
    var vidj, img;
    
    img = $('.img-start');
    img.show();
    
    vidj = $('#' + sel + '-video');
    vidj.hide()
    
    show_hints()
  }, false);
  
  info = $('#' + sel + '-info');
  info.fadeOut('fast');
};

function pause_and_show() {
  var vid, info;
  vid = document.getElementById(sel + '-video');
  vid.pause();
  
  info = $('#' + sel + '-info')
  info.fadeIn('fast')
};

function play_video(selector, time) {
  var img, vid, vidj;
  sel = selector;

  img = $('.img-start');
  img.hide();
  
  vidj = $('#' + sel + '-video');
  vidj.show();
  vid = document.getElementById(sel + '-video' );
  vid.play();
  
  setTimeout(pause_and_show, time);
  hide_hints()
};

var hints, current;
hints = ['pippy', 'turtle', 'journal'];
current = 0;

function pulse() {
  var ele;
  ele = $('#' + hints[current] + '-hint');
  ele.removeClass('pulsed');

  current++;
  if (current == hints.length) {
    current = 0;
  }

  ele = $('#' + hints[current] + '-hint');
  ele.addClass('pulsed');
};

setInterval(pulse, 2000);