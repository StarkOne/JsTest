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
    var headerH = $("#js-header").height(),
    		navH = $("#js-nav-container").innerHeight();
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
    //
});
