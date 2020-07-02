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

	$('.success-works').owlCarousel({
		items: 1,
		loop: true,
		margin: 15,
		nav: true,
		navText: ["<span><i class='fas fa-arrow-left'></i></span>", "<span><i class='fas fa-arrow-right'></i></span>"],
		navSpeed: 1000,
		smartSpeed: 1000
	})

})