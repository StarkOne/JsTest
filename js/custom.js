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
    $(".js-show-modal").on("click", function(e){
        e.preventDefault();
        var currentModal = $(this).attr("href");

        $(currentModal + ", #js-overlay").fadeIn(500);
        $("body").addClass("open-modal");
    });

    $(".js-modal-close, #js-overlay").on("click", function(e){
        e.preventDefault();
        $(".js-modal, #js-overlay").fadeOut(100);
        $("body").removeClass("open-modal");
    });
});
