(function () {
  var nowX, nowWidth, offset;

  var slidebar = $('#arrowboth');
  var now = $('.now');
  var container = $('#container');
  var slidebarWidth = slidebar.outerWidth();
  slidebar.on('mousedown', function(e) {

    nowX = container.offset().left;
    nowWidth = container.outerWidth();
    var slidebarX = slidebar.position().left;
    var mouseX = e.clientX - nowX;
    offset = mouseX - slidebarX;
    container.on('mousemove', drag);
    e.preventDefault();
  });

  $(document).on('mouseup', function() {
    container.off('mousemove');
  });

  function drag(e) {
    if(e.clientX > nowX + nowWidth) {
      return;
    }
    if(e.clientX < nowX) {
      return;
    }
    var px = e.clientX - nowX - offset;

      slidebar.css({
        left: px + 'px'
      });
      now.css({
        width: px + (slidebarWidth / 2) + 'px'
      });
  }

}) ();
