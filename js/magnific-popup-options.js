$(document).ready(function() {
	// MagnificPopup pour images normales
	var magnifPopup = function() {
	  $('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-with-zoom',
		gallery: {
		  enabled: true
		},
		zoom: {
		  enabled: true,
		  duration: 300,
		  easing: 'ease-in-out',
		  opener: function(openerElement) {
			return openerElement.is('img') ? openerElement : openerElement.find('img');
		  }
		}
	  });
  
	  // MagnificPopup pour la galerie spéciale (gallery-popup)
	  $('.gallery-popup').magnificPopup({
		type: 'image',
		gallery: {
		  enabled: true
		},
		zoom: {
		  enabled: true,
		  duration: 300,
		  easing: 'ease-in-out',
		  opener: function(openerElement) {
			return openerElement.is('img') ? openerElement : openerElement.find('img');
		  }
		}
	  });
	};
  
	var magnifVideo = function() {
	  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	  });
	};
  
	// Call the functions
	magnifPopup();
	magnifVideo();
  });
  