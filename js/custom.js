$(function() {
		//плавный скролл страницы
		$("#js-get-started").on("click", function(e){
			e.preventDefault();
			var plansOffset = $("#js-plans").offset().top;
			$("html, body").animate({
				scrollTop: plansOffset
			}, 500);
		});
		//закрипляем меню при прокрутке
		var headerH = $("#js-header").height(),                //высота
				navH = $("#js-nav-container").innerHeight();				// полная высота
		$(document).on("scroll", function(){
			var documentScroll = $(this).scrollTop();
			if(documentScroll > headerH){
				$("#js-nav-container").addClass("fixed");
				$("#js-header").css("paddingTop", navH);
			} else{
				$("#js-nav-container").removeClass("fixed");
				$("#js-header").removeAttr("style");
			}
		});
		// улучшиный скролл в меню до блока
		$("#js-nav a").on("click", function(e){
				e.preventDefault();
				var currentBlock = $(this).attr("href"),
						currentBlockOffset = $(currentBlock).offset().top;  // получаем число в пикселях от верха 

				$("html, body").animate({
						scrollTop: currentBlockOffset - 20
				}, 500);
		});
		//создания модальное окно
		// $(".js-show-modal").on("click", function(e){
		//     e.preventDefault();
		//     var currentModal = $(this).attr("href");

		//     $(currentModal + ", #js-overlay").fadeIn(500);
		//     $("body").addClass("open-modal");
		// });

		// $(".js-modal-close, #js-overlay").on("click", function(e){
		//     e.preventDefault();
		//     $(".js-modal, #js-overlay").fadeOut(100);
		//     $("body").removeClass("open-modal");
		// });
		//создание аккардиона
		// $(".js-faq-title").on("click", function(e){
		//     e.preventDefault();
		//     var $this = $(this);
		//     if(!$this.hasClass("active")){
		//         $(".js-faq-content").slideUp();
		//         $(".js-faq-title").removeClass("active");
		//     }
		//     $this.toggleClass("active");
		//     $this.next().slideToggle();
		// });
		// создание улучшенного аккардиона
		$(".js-faq-title").on("click", function(e){
				e.preventDefault();
				var $this = $(this),
						answerId = $this.attr("href");
				if(!$this.hasClass("active")){
						$(".js-faq-content").slideUp();
						$(".js-faq-title").removeClass("active");
				}
				$this.toggleClass("active");
				$(answerId).slideToggle();
		}); 
		// всплывающие тултитул
		$(".js-popup-hover").hover(function(){
				var $this = $(this),
						popupId = $this.attr("href");

				$(popupId).fadeIn();

		}, function(){   // происходить когда убран курсор мыши
				 $(".js-popup").fadeOut();    
		});
		//создание улучшеного модального окна

	$(".js-modal").each(function(){
		var modalWidth = $(this).innerWidth() / 2;

		$(this).css({
			"marginLeft" : "-" + modalWidth + "px"
		});
	});

	$(".js-show-modal").on("click", function(e) {

				e.preventDefault();

				var currentModal = $(this).attr("href");

				$(currentModal).fadeIn(500);
				$("body").append("<div class='overlay' id='js-overlay'></div>").addClass("open-modal");

		});


		$(".js-modal-close").on("click", function(e) {

				e.preventDefault();
				$(".js-modal").fadeOut(100);
				$("body").removeClass("open-modal");
				$("#js-overlay").remove();

		});
		$("body").on("click", "#js-overlay", function() {
				$(".js-modal").fadeOut(100);
				$("body").removeClass("open-modal");
				$("#js-overlay").remove();
		});
		//методы
		// var links = $("#js-nav").children("a"); //получаем доступ к дочерним элементам в элементе
		// links.addClass("test");

		// var links = $("#js-nav").find("a"); //находим все ссылки в элементе 
		// links.addClass("test");

		// открытие и закрытия текста
		$(".js-read-more").on("click",function(e){
			e.preventDefault();

			var $this = $(this),
					text = $this.text(),
					textId = $this.attr("href");

			if(text == "Read More"){
				$this.text("hide");
			} else {
				$this.text("Read More");
			}

			$(textId).toggleClass("hidden");

		});
		//слайдер slick.js
		$("#js-testimonials-slider").slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: false,
		cssEase: 'linear',
		responsive: [
	{
		breakpoint: 1024,
		settings: {
		slidesToShow: 3,
		slidesToScroll: 3,
		}
	},
	{
		breakpoint: 600,
		settings: {
		slidesToShow: 2,
		slidesToScroll: 2
		}
	},
	{
		breakpoint: 480,
		settings: {
		slidesToShow: 1,
		slidesToScroll: 1
		}
	}

	]
		});
		$(".js-slider-prev").on("click", function(){
			$("#js-testimonials-slider").slick("slickPrev");
		});
		$(".js-slider-next").on("click", function(){
			$("#js-testimonials-slider").slick("slickNext");
		});
		//wow.js and animate

		var wow = new WOW(
		  {
		    boxClass:     'wow',      // animated element css class (default is wow)
		    animateClass: 'animated', // animation css class (default is animated)
		    offset:       150,          // distance to the element when triggering the animation (default is 0)
		    mobile:       false,       // trigger animations on mobile devices (default is true)
		    live:         true,       // act on asynchronously loaded content (default is true)
		    callback:     function(box) {
		      // the callback is fired every time an animation is started
		      // the argument that is passed in is the DOM node being animated
		    },
		    scrollContainer: null // optional scroll container selector, otherwise use window
		  }
		);
		wow.init();
		//ie8 плейсхолдер

		$('input, textarea').placeholder();

		//сделаем счётчик
		$('.js-counter-comments').counterUp({
			delay: 10,
    		time: 1500
		});
		$('.js-counter-likes').counterUp({
			delay: 10,
    	time: 3000
		});
		// бегуший текст  https://github.com/mattboldt/typed.js
		$(".js-typed").typed({
			stringsElement: $("#typed-string"),
			//strings: ["Strength in equality.The power of dreams", "Second sentence."],
			typeSpeed: 40,
			backSpeed: 0,
			backDelay: 1000,
			showCursor: true,
		});
});
