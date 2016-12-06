$(document).ready(function(){
	$('.panel nav li a').hover(
		function(){
			var $this = $(this),
				menuItem = $this.data('name');

			if (typeof menuItem !== 'undefined'){
				$('body').addClass('l-with-subnav1');				
			} else {
				$('body').removeClass('l-with-subnav1');
			};

			

			$('.subnav-lev1 .subnav_content-active').removeClass('subnav_content-active');
			$('.subnav-lev1 .subnav_content-' + menuItem).addClass('subnav_content-active');

	}
	);


	$('.subnav-lev1 .subnav_content ul li a').mouseenter(function(){
			var $this = $(this),
				menuItem = $this.data('name');
console.log("!");
			if (typeof menuItem !== 'undefined'){
				$('body').addClass('l-with-subnav2');				
			} else {
				$('body').removeClass('l-with-subnav2');
			};
			

			$('.subnav-lev2 .subnav_content-active').removeClass('subnav_content-active');
			$('.subnav-lev2 .subnav_content-' + menuItem).addClass('subnav_content-active');

	}
	);



	$('.main').hover(function(){
		$('body').removeClass('l-with-subnav1')
		$('body').removeClass('l-with-subnav2')
	})
})


$('document').on('hover', '.subnav-lev1 .subnav_content', function(){
	// console.log("~!")
})

