(function($) {
	
  "use strict"; // Start of use strict
	
	if (window.matchMedia("(min-width: 600px)").matches) {
		$("body").niceScroll();
	}

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 500,
    scale: 0.3,
    distance: '0px',
	reset: "true"
  }, 300);
	
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
	
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

	$("#shop-buy").click(function(){
		iziToast.info({
			timeout: 10000,
			title: 'Увага!',
			message: 'Зараз інтернет магазин знаходиться в розробці, у скорому часі ми його запустимо.',
		});
	});
	
	var sizetoshow,sizetoscroll;
	
	if (window.matchMedia("(max-width: 600px)").matches) {
		sizetoshow = 1;
		sizetoscroll=1;
	} else { 
	    sizetoshow = 3;
	    sizetoscroll=2;
	}
	
	$(".partner").slick({
		dots: true,
		autoplay: true,
		slidesToShow: sizetoshow,
		slidesToScroll: sizetoscroll,
	});
	
})(jQuery);