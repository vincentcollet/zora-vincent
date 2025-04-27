$(document).ready(function() {
	// MagnificPopup
	var magnifPopup = function() {
	  $('#fh5co-gallery-list').magnificPopup({
		delegate: 'a.image-popup', // cible tous les <a class="image-popup"> dans la liste
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-with-zoom',
		gallery: {
		  enabled: true, // navigation galerie
		  navigateByImgClick: true,
		  preload: [0,1] // précharge les images autour
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
  