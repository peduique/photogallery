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

			function prev() {
				if (current > 0) { 
					current -= 2 
					Slider.play();
				} 
			}

			function next() {
				if ( ( current + 1 ) < slides ) {
					Slider.play();
				}
			}

			prevSlide.addEventListener('click', function() {
				prev();
			}, false);

			nextSlide.addEventListener('click', function() {
				next();
			}, false);

			document.onkeyup = function(e) {
				if (e.keyCode == 37) {
					prev();

				} else if (e.keyCode == 39) {
					next();
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