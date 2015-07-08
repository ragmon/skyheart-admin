head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	//select
	$(document).click(function() {
		$(".js-select").removeClass("is-active");
		$(".js-select-list").slideUp(100);
	});

	// select list
	$("body").on("click",".js-select",function(event) {
		event.stopPropagation();
	});
	$("body").on("click",".js-select-text",function(event) {
		var select = $(this).parents(".js-select");
		if (select.hasClass("is-active")) {
			$(".js-select").removeClass("is-active");
			$(".js-select-list").slideUp(100);
		}
		else {
			$(".js-select").removeClass("is-active");
			$(".js-select-list").slideUp(100);
			select.toggleClass("is-active").find(".js-select-list").slideToggle(100);
		}

	});

	$("body").on("click",".js-select-list li",function() {
		var val = $(this).attr("data-val");
		var text = $(this).text();
		var select = $(this).parents(".js-select");
		var selectList = $(this).parents(".js-select-list");
		select.find(".js-select-text").text(text);
		select.find("option").removeAttr("selected");
		select.find('option[value="'+val+'"]').attr("selected", "selected");
		selectList.find("li").removeClass("is-active");
		$(this).addClass("is-active");
		select.removeClass("is-active");
		selectList.slideUp(100);
		return false;

	});

	$('.js-report-link').on('click', function() {
		$('.js-report').addClass('is-active');
		$('.js-report').css('top', $(this).offset().top - $('.js-report-block').offset().top + $(this).outerHeight());
		if ($('body').height() - $(this).offset().top < 500) {
			$('.js-report').css('top', $(this).offset().top - $('.js-report-block').offset().top - $('.js-report').outerHeight() - $('.a-item').height());
		};
		return false;
	});
	$('.js-report').each(function() {
		$('body').on('click', function() {
			$('.js-report').removeClass('is-active');
		});
		$(this).on('click', function(event) {
			event.stopPropagation();
		});
	});

	//smiles
	$('.js-smile-btn').on('click', function() {
		$('.js-smile').toggleClass('is-active');
		return false;
	});
	$('.js-smile').each(function() {
		$('body').on('click', function() {
			$('.js-smile').removeClass('is-active');
		});
		$(this).on('click', function(event) {
			event.stopPropagation();
		});
		$('.js-smile a').on('click', function() {
			$('.js-smile').removeClass('is-active');
			return false;
		});
	});
});