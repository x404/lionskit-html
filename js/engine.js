$(document).ready(function(){
	$('.panel nav li a, .panel nav li span').hover(
		function(){
			var $this = $(this),
				$parent = $this.parent(),
				$current = $this.closest('ul').find('.current');
				menuItem = $this.data('name'),
				w = $(document).width();

			if (typeof menuItem !== 'undefined' && w > 768){
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


	$('.subnav-lev1 .subnav_content ul li').find('a, span').mouseenter(function(){
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

	// mask
	$('input.tel').inputmask({
		mask: '+7(999)999-99-99',
		showMaskOnHover : false
	});
	// #mask

	// validate
	$.validator.addMethod("validphone", function(value){
		if (Inputmask.isValid(value, { mask: '+7(999)999-99-99'})) return true
		else return false;
	},"");
		
	// clear forms
	$('.form').find('.form-control').val('');
	
	// validate
	$('.form .submit').click(function(e){
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


	$('#add-review-form').validate({
		rules: {
			name:{required : true},
			tel: {validphone:true},
			auto: {required:true},
			city: {required:true},
			msg: {required:true}
		},
		errorPlacement: function(error, element) {
			if (element.attr('name') == 'name') {
				$('#add-review-form .helper-field-name').text('Заполните поле');
				$('#add-review-form .helper-field-name').addClass('error')
			};
			if (element.attr('name') == 'tel'){
				$('#add-review-form .helper-field-tel').text('Заполните поле');
				$('#add-review-form .helper-field-tel').addClass('error')
			};
			if (element.attr('name') == 'city') {
				$('#add-review-form .helper-field-city').text('Заполните поле');
				$('#add-review-form .helper-field-city').addClass('error')
			};
			if (element.attr('name') == 'auto'){
				$('#add-review-form .helper-field-auto').text('Заполните поле');
				$('#add-review-form .helper-field-auto').addClass('error')
			};
			if (element.attr('name') == 'msg'){
				$('#add-review-form .helper-field-msg').text('Заполните поле');
				$('#add-review-form .helper-field-msg').addClass('error')
			};
		}
	});	

	$('#add-order-form').validate({
		rules: {
			name:{required : true},
			tel: {validphone:true}
		},
		errorPlacement: function(error, element) {
			if (element.attr('name') == 'name') {
				$('#add-order-form .helper-field-name').text('Заполните поле');
				$('#add-order-form .helper-field-name').addClass('error')
			}

			if (element.attr('name') == 'tel'){
				$('#add-order-form .helper-field-tel').text('Заполните поле');
				$('#add-order-form .helper-field-tel').addClass('error')
			}
		}
	});		


	var $slickElement = $('#reviews');
	$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		//currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
		var i = (currentSlide ? currentSlide : 0) + 1,
			ii = '';
		(i < 10) ? ii = '0' + i : ii = i;
		$('#count_current').text(ii);
		$('#count_all').text('/ ' + slick.slideCount);
	});

	$slickElement.slick({
		dots: true,
		fade: true,
		prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Предыдущий слайд" tabindex="0" role="button"></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Следующий слайд" tabindex="0" role="button"></button>',
		appendArrows : $('.prevnext')
	});

	// scrollbars
	$('#articles-scroller').mCustomScrollbar({
		scrollButtons : {enable:true},
		autoDraggerLength : true
	});

	$('#goods-scroller').mCustomScrollbar({
		scrollButtons : {enable:true},
		autoDraggerLength : true
	});	
	

	$('#entry-scroller').mCustomScrollbar({
		scrollButtons : {enable:true},
		autoDraggerLength : true
	});
	$('#card-scroller-desc').mCustomScrollbar();

	$('#gallery-scroller').mCustomScrollbar({
		callbacks:{
			whileScrolling:function(el){
				$('#gallery-scroller img').each(function (){
					id = '#' + $(this).attr('id');
					if ($(id).offset().top < 1 ) {
						$('.thumbs .current').removeClass('current');
						$('.thumbs li a').filter(function( index ) {
							return $(this).attr('href') === id;
						}).addClass('current');
					}
				});

				if (this.mcs.topPct > 97) {
					$('.thumbs .current').removeClass('current');
					$('.thumbs li:last-child a').addClass('current');
				}
			}
		}
	});	

	$('.thumbs a[href^="#"]').click(function(e){
		var $this = $(this),
			href=$this.attr('href'),
			target=$(href).parents('.mCustomScrollbar'); 
			$('.thumbs .current').removeClass('current');
			$this.addClass('current');

		if(target.length){
			e.preventDefault();
			target.mCustomScrollbar('scrollTo',href);
		}
	});	

	// подгрузщка контента по ссылке в статьях
	$('a[rel="load-entry"]').click(function(e){
		e.preventDefault();
		var w = $(window).width();
		$('#articles-scroller .articles_item.current').removeClass('current');
		$(this).closest('li').addClass('current');
		// $('#entry-scroller').mCustomScrollbar('scrollTo', 'top');
		var url=$(this).attr('href'),
			$container = $('#entry-scroller .mCSB_container');
			if (w < 991){
				$container.closest('.main').addClass('o-entry');
			}
			$container.html('');
		$.get(url,function(data){
				$container.fadeOut('normal', function(){
				$container.html('<p class="back"><button type="button" class="back_btn">Назад</button></p>' + data); 
			});
		}).done(function(data) {
			$container.fadeIn('normal', function(){
			});
		}).fail(function() {
			$container.html('<p class="back"><button type="button" class="back_btn">Назад</button></p><div class="entry_top"><h1>Статья не загружена</h1></div>');
		});
		$('body,html').animate({scrollTop: 0}, 1);
	});

	// mobile-menu
	$('.panel').each(function(){
		var $this = $(this),
			$link = $('.navbar-toggle'),
			$close = $this.find('.close'),

			init = function(){
				$link.on('click', openMenu);
				$close.on('click', closeMenu);
			},
			openMenu = function(e){
				e.preventDefault();
				h = $(document).height()-50;
				$('body').addClass('o-menu');
				// $('.mobile-menu').height(h);

			},
			closeMenu = function(e){
				e.preventDefault();
				$('body').removeClass('o-menu');
			};
		init();
	});	
});

$(document).on('click', '.o-entry .back_btn', function(e){
	e.preventDefault();
	$('.o-entry').removeClass('o-entry');
});



// показываем второй  уровень меню
$(document).on('click', '.o-menu .panel .folder a, .o-menu .panel .folder span', function(e){
	e.preventDefault();
	$('.panel').addClass('hide');
	$('.subnav-lev1').addClass('show');


	var $this = $(this),
		menuItem = $this.data('name'),
		w = $(document).width();

	if (typeof menuItem !== 'undefined' && w > 768){
		$('body').addClass('l-with-subnav1');
	} else {
		$('body').removeClass('l-with-subnav1');
	};

	$('.subnav-lev1 .subnav_content-mobileactive').removeClass('subnav_content-mobileactive');
	$('.subnav-lev1 .subnav_content-' + menuItem).addClass('subnav_content-mobileactive');
});

// возврат из второго уровня в первое
$(document).on('click', '.o-menu .subnav-lev1 .back_btn', function(e){
	e.preventDefault();
	$('.subnav-lev1').removeClass('show');
	$('.panel').removeClass('hide');
});

// кнопка закрыть во втором уровне меню
$(document).on('click', '.o-menu .subnav-lev1 .close', function(e){
	e.preventDefault();
	$('.o-menu .subnav-lev1').removeClass('show');
	$('body').removeClass('o-menu');
	$('.panel').removeClass('hide');
});


// показываем третий  уровень меню
$(document).on('click', '.o-menu .subnav-lev1 .folder a, .o-menu .subnav-lev1 .folder span', function(e){
	e.preventDefault();
	$('.subnav-lev1').removeClass('show').addClass('hide');
	$('.subnav-lev2').addClass('show');

	var $this = $(this),
		menuItem = $this.data('name'),
		w = $(document).width();

	if (typeof menuItem !== 'undefined' && w > 768){
		$('body').addClass('l-with-subnav2');
	} else {
		$('body').removeClass('l-with-subnav2');
	};

	$('.subnav-lev2 .subnav_content-mobileactive').removeClass('subnav_content-mobileactive');
	$('.subnav-lev2 .subnav_content-' + menuItem).addClass('subnav_content-mobileactive');
});

// возврат из третьего уровня в первое
$(document).on('click', '.o-menu .subnav-lev2 .back_btn', function(e){
	e.preventDefault();
	$('.o-menu .subnav-lev2').removeClass('show');
	$('.o-menu .subnav-lev1').addClass('show');
});

// кнопка закрыть в третьем уровне меню
$(document).on('click', '.o-menu .subnav-lev2 .close', function(e){
	e.preventDefault();
	// скрываем третий уровень меню
	$('.o-menu .subnav-lev2').removeClass('show');
	// скрываем второй уровень меню
	$('.o-menu .subnav-lev1').removeClass('hide');
	// скрываем первый уровень меню
	$('.panel').removeClass('hide');
	$('body').removeClass('o-menu');
});


// =заглушка для IE
//event listener: DOM ready
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
//call plugin function after DOM ready
addLoadEvent(function(){
	outdatedBrowser({
		bgColor: '#f25648',
		color: '#ffffff',
		lowerThan: 'transform',
		languagePath: '/outdatedbrowser/lang/ru.html'
	})
});
// =/заглушка для IE