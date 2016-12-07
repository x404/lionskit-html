$(document).ready(function(){
	$('.panel nav li a').hover(
		function(){
			var $this = $(this),
				$parent = $this.parent(),
				$current = $this.closest('ul').find('.current');
				menuItem = $this.data('name');

			if (typeof menuItem !== 'undefined'){
				$('body').addClass('l-with-subnav1');
			} else {
				$('body').removeClass('l-with-subnav1');
			};			

			$current.removeClass('current');
			$parent.addClass('current');

			$('.subnav-lev1 .subnav_content-active').removeClass('subnav_content-active');
			$('.subnav-lev1 .subnav_content-' + menuItem).addClass('subnav_content-active');

			// удаляем наведения со 2го уровня
			$('.subnav-lev1').find('.current').removeClass('current');
	});


	$('.subnav-lev1 .subnav_content ul li a').mouseenter(function(){
			var $this = $(this),
				$parent = $this.parent(),
				$currents = $this.closest('ul').find('.current');
				menuItem = $this.data('name');

		if (typeof menuItem !== 'undefined'){
			$('body').addClass('l-with-subnav2');
		} else {
			$('body').removeClass('l-with-subnav2');
		};
		

		// удаляем наведения со 2го уровня и добавляем новое
		$currents.removeClass('current');
		$parent.addClass('current');


		$('.subnav-lev2 .subnav_content-active').removeClass('subnav_content-active');
		$('.subnav-lev2 .subnav_content-' + menuItem).addClass('subnav_content-active');
	});



	$('.main').hover(function(){
		$('body').removeClass('l-with-subnav1')
		$('body').removeClass('l-with-subnav2')
	})
})


$('document').on('hover', '.subnav-lev1 .subnav_content', function(){
	// console.log("~!")
})

