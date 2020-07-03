$(document).ready(function () {

	const menuToggle = document.querySelector('.menu-toggle');
	const mobMenu = document.querySelector('.nav-menu');
	const overlayBlock = document.querySelector('#overlay');
	const backTopButton = document.querySelector('#back-top');

	const bodyEl = document.body;
	if (menuToggle) {
		menuToggle.addEventListener('click', function () {
			if (this.classList.contains('active')) {
				this.classList.remove('active');
				mobMenu.classList.remove('active');
				overlayBlock.classList.remove('active');
				bodyEl.classList.remove('noscroll');

			} else {
				this.classList.add('active');
				mobMenu.classList.add('active');
				overlayBlock.classList.add('active');
				bodyEl.classList.add('noscroll');

			}
		});
		window.addEventListener('resize', function () {
			menuToggle.classList.remove('active');
			overlayBlock.classList.remove('active');
			bodyEl.classList.remove('noscroll');
			mobMenu.classList.remove('active');

		});
		mobMenu.addEventListener('click', function () {
			this.classList.remove('active');
			menuToggle.classList.remove('active');
			overlayBlock.classList.remove('active');
			bodyEl.classList.remove('noscroll');

		})
	}
	let successSlider = $('.success-works')

	successSlider.owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		dots: false,
		navSpeed: 1000,
		smartSpeed: 1000
	})
	$(".success-next").click(function () {
		successSlider.trigger("next.owl.carousel");
		console.log('555');
	});
	$(".success-prev").click(function () {
		successSlider.trigger("prev.owl.carousel");
	});
})