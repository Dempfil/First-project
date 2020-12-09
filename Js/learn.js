var transform_styles = ['-webkit-transform',
                        '-ms-transform',
                        'transform'];
window.randomize = function() {
 var rotation = Math.floor(Math.random() * 360);
 for(i in transform_styles) {
  $('.circle .fill').css(transform_styles[i],
                         'rotate(' + rotation + 'deg)');
 }
}