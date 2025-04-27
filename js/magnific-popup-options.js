$(document).ready(function() {
	// MagnificPopup pour toutes les images de la galerie
	var magnifPopup = function() {
	  $('#fh5co-gallery-list').magnificPopup({
		delegate: 'a.image-popup', // seulement les <a> avec class "image-popup"
		type: 'image',
		gallery: {
		  enabled: true // Active la navigation entre les images
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
  
	// MagnificPopup pour les vidéos (YouTube, Vimeo, Google Maps)
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
  
	// Appeler les fonctions
	magnifPopup();
	magnifVideo();
  });
  