document.addEventListener('DOMContentLoaded', function() {

  /// menu de navegacion////
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  //// sliders////
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, {
   
    indicators:false,
    height:550,
    duration:500,
    interval:3000
  });

});

 