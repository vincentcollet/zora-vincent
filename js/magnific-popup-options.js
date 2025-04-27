$(document).ready(function() {
    // MagnificPopup pour images et galeries
    $('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled: true,
            delegate: 'a', // <-- important pour les sous-liens
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

    $('.gallery-trigger').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
  
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
  