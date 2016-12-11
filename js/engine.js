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
	});


	$('#home_bg_slider').slick({
		arrows : false,
		dots: false,
		autoplay: true,
		adaptiveHeight : true,
		autoplaySpeed : 5000,
		fade: true,
		cssEase: 'linear'
	})

	// $('#home_bg_slider').owlCarousel({
	// 	loop: true,
	// 	autoplay : false,
	// 	autoplayTimeout : 5000,
	// 	animateOut: 'fadeOut',
	// 	nav: false,
	// 	dots: false,
	// 	items:1,
	// 	lazyLoad: true
	// });


	$('#foo1').owlCarousel({
		loop: true,
		autoplay : true,
		autoplayTimeout : 6000,
		autoplayHoverPause : true,
		animateOut: 'fadeOut',
		nav: false,
		dots: false,
		items:1,
		lazyLoad: true
	});

	$('#foo2').owlCarousel({
		loop: true,
		autoplay : true,
		autoplayTimeout : 8000,
		autoplayHoverPause : true,
		animateOut: 'fadeOut',
		nav: false,
		dots: false,
		items:1,
		lazyLoad: true
	});

	$('#foo3').owlCarousel({
		loop: true,
		autoplay : true,
		autoplayTimeout : 11000,
		autoplayHoverPause : true,
		animateOut: 'fadeOut',
		nav: false,
		dots: false,
		items:1,
		lazyLoad: true
	});


	// inputs
	$('#feedback_form .input-field').each(function(){
		if ($(this).find('.form-control').val().length > 0) {
			return $(this).addClass('is-charged');
		}		
	})

	$('body').on('focusin', '.input-field', function(e) {
		return $(this).addClass('is-focused');
	})
	.on('focusout', '.input-field', function(e) {
		$(this).removeClass('is-focused');
		return $(this).removeClass('is-focused');
	})
	.on('change', '.input-field', function() {
		$(this).removeClass('is-charged');
		if ($(this).find('.form-control').val().length > 0) {
			return $(this).addClass('is-charged');
		}
	});
	// #inputs


	// clear forms
	$('#feeback_form').find('.form-control').val('');
	
	// validate
	$('#feeback_form .submit').click(function(e){
		e.preventDefault();
		$(this).closest('form').submit();
	});

	$('#feeback_form').validate({
		rules: {
			name:{
				required : true
			},
			tel: {
				required:true
			},
			msg: {
				required:true
			}
		},
		errorPlacement: function(error, element) {
			if (element.attr('name') == 'name') {
				$('#feeback_form .helper-field-name').text('Заполните поле');
				$('#feeback_form .helper-field-name').addClass('error')
			}

			if (element.attr('name') == 'tel'){
				$('#feeback_form .helper-field-tel').text('Заполните поле');
				$('#feeback_form .helper-field-tel').addClass('error')
			}
			if (element.attr('name') == 'msg'){
				$('#feeback_form .helper-field-msg').text('Заполните поле');
				$('#feeback_form .helper-field-msg').addClass('error')
			}
		}
	});	

})


$('document').on('hover', '.subnav-lev1 .subnav_content', function(){
	// console.log("~!")
})




/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: RU
 */
jQuery.extend(jQuery.validator.messages, {
	required: "Заполните поле",
	remote: "Пожалуйста, введите правильное значение.",
	email: "Пожалуйста, введите корректный адрес электронной почты.",
	url: "Пожалуйста, введите корректный URL.",
	date: "Пожалуйста, введите корректную дату.",
	dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
	number: "Пожалуйста, введите число.",
	digits: "Пожалуйста, вводите только цифры.",
	creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
	equalTo: "Пожалуйста, введите такое же значение ещё раз.",
	accept: "Пожалуйста, выберите файл с правильным расширением.",
	maxlength: jQuery.validator.format("Пожалуйста, введите не больше {0} символов."),
	minlength: jQuery.validator.format("Пожалуйста, введите не меньше {0} символов."),
	rangelength: jQuery.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
	range: jQuery.validator.format("Пожалуйста, введите число от {0} до {1}."),
	max: jQuery.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
	min: jQuery.validator.format("Пожалуйста, введите число, большее или равное {0}.")
});
