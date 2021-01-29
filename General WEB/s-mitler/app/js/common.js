$(function() {

	$('#my-menu').mmenu({ 
		extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
				title: '<img src="img/logo-1.svg" alt="Салон красоты S&Mitler">'
			},
		offCanvas: {
			position: 'right'

		}

	   });

	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function() {

		$('.hamburger').addClass('is-active');
	}).bind('closed', function() {

		$('.hamburger').removeClass('is-active');
	});
	$('.carousel-services').on('initialized.owl.carousel', function()
	{
		setTimeout(carouselService);
	
	});

	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartspeed: 700,
		navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}

		}
	});
	$('.carousel-services-composition .services-h3').each(function()
	{
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));


	});




	function carouselService()
	{
		$('.carousel-services-item').each(function() {
			var ths = $(this);
			var thsheight = ths.find('.carousel-services-content').outerHeight();
			ths.find('.carousel-services-image').css('min-height', thsheight);


		})
	};
	



	function onResize()
	{
		$('.carousel-services-content').equalHeights();
	}onResize()
	window.onresize = function()
	{
		onResize();
	}

	$('.carousel-reviews').owlCarousel({
		loop: true,
		nav: false,
		items: 1,
		smartspeed: 700,
		dots: true,
		dotsEach: true,
		autoHeight: true
	});
	
	$('.carousel-partners').owlCarousel({
		loop: true,
		nav: true,
		smartspeed: 700,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsiveClass: true,
		responsive:
		{
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});



	$('.accent-h2').each(function()
	{
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));


	});

	$('.select2-special').select2({width: 'style'});

	$(window).scroll(function() {

		
		if($(this).scrollTop() >= $(this).height())
			$('.go-top').addClass('active');
		else 
			$('.go-top').removeClass('active');
	});

	$('.go-top').click(function()
	{
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing')


	});



	$("form.callback").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", 
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();


			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	$(window).on('load', function() {
		$('.preloader').delay(1000).fadeOut('slow');
		// for 000webhost
		setTimeout(function(){

			document.querySelector('.go-top ~ div').remove();
		} , 1);
	});


});
