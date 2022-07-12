function init() {
  window.addEventListener('scroll', function(e){
      var distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 100,
          header = document.querySelector("header");
      if (distanceY > shrinkOn) {
          classie.add(header,"smaller");
      } else {
          if (classie.has(header,"smaller")) {
              classie.remove(header,"smaller");
          }
      }
  });

  var menuVisible = false;

  $('#menu').click(function() {
    if (menuVisible) {
      $('#responsiveNav').css({'display':'none'});
      menuVisible = false;
      return;
    }
    $('#responsiveNav').css({'display':'block'});
    menuVisible = true;
  });

  $('#responsiveNav').click(function() {
    $(this).css({'display':'none'});
    menuVisible = false;
  });

  //Load youtube video

  (function() {
    var v = document.getElementsByClassName("youtube-player");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = labnolThumb(v[n].dataset.id);
        p.onclick = labnolIframe;
        v[n].appendChild(p);
    }
  })();

  function labnolThumb() {
      return '<img src="img/trailer_screen.png" alt="Trailer" />';
  }

  function labnolIframe() {
      var iframe = document.createElement("iframe");
      iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=1&showinfo=0&fs=1&rel=0");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("id", "youtube-iframe");
      iframe.setAttribute("width", "770");
      iframe.setAttribute("height", "441");
      this.parentNode.replaceChild(iframe, this);
  }

}

window.onload = init();
