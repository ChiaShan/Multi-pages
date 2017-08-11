(function navi() {
  var navibutton = document.getElementById('more');
  var navi = document.getElementById('navi');

  var close = document.getElementById('closeX');

  navibutton.addEventListener('click', function(e) {
    navi.style.display = "inline-block";
    scrollTo(0, document.body.clientHeight);
    e.stopPropagation();
  })

  close.addEventListener('click', function() {
    navi.style.display = "none";
  })

  document.addEventListener('click', function() {
    navi.style.display = "none";
  })

}) ();
