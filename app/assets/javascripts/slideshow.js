var Slider = (function() {

	var current,
	slides,
	images;

	return {
		initialize: function() {
			slider = document.getElementsByClassName('slider')[0];
			images = slider.querySelectorAll("figure");
			slides = images.length;

			current = -1; 
			Slider.navigation();
			Slider.play();
		},

		navigation: function() {
			navigation = document.getElementsByClassName('slideshow-nav')[0];
			var prevSlide = navigation.querySelector('.prev-slide'),
			nextSlide = navigation.querySelector('.next-slide');

			prevSlide.addEventListener('click', function() {
				if (current > 0) { 
					current -= 2 
					Slider.play();
				} 
			}, false);

			nextSlide.addEventListener('click', function() {
				if ( ( current + 1 ) < slides ) {
					Slider.play();
				}
			}, false);

			document.onkeyup = function(e) {
				if (event.keyCode == 37) {
					if (current > 0) { 
						current -= 2 
						Slider.play();
					} 

				} else if (event.keyCode == 39) {
					if ( ( current + 1 ) < slides ) {
						Slider.play();
					}
				}
			}
		},

		play: function() {
			var position = document.getElementsByClassName('slider-position')[0];
			position.innerHTML = ( current + 2 ) + ' de ' + slides;

			current = ( current + 1 ) % slides;

			for (var i = 0; i < slides; i++) {
				if ( i === current ) {
					images[i].classList.remove("hide");
				} else {
					images[i].classList.add("hide");
				}
			}

		}
	};
})();