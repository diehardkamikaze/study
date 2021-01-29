+(function() {

	window.onload = function() {
		var bbossGamburger = document.querySelector('.bboss-hamburger');
		var bbossMenu = document.querySelector('.header-navigation > ul');
		bbossGamburger.addEventListener('click', function (event) {
			bbossGamburger.classList.toggle('isclicked');
			bbossMenu.classList.toggle('site-menu');
			bbossMenu.classList.toggle('gamburger-menu');
		}); 
	}
})();
