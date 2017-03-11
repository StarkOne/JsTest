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
});
