$(function () {
	$header = $(".header");
	$headerBtn = $(".header__btn");
	$headerNav = $(".header__nav");
	$video = $(".top-video");
	$firstBlock = $(".container-decor").first().height();
	$scrollTopLast = 0;

	// $(window).scrollY(function() {
	// 	if($(this).scrollTop() > 1) {
	// 	 header.addClass('header_fixed');
	// 	} else {
	// 	 header.removeClass('header_fixed');
	// 	}
	// //     });

	// $(window).on("scroll", function () {
	// 	$scrollTop = window.scrollY;

	// 	if ($scrollTop > $scrollTopLast) {
	// 		// $header.addClass("header--fixed");
	// 		$header.slideDown(1300);
	// 		$header.css({
	// 			"position": "fixed",
	// 			"top": "0",

	// 			"background-color": "#37188b",
	// 			"padding": "30px 0",

	// 			"box-shadow": "0 10px 20px 0 #2a1b55",
	// 		});
	// 	} else {
	// 		// $header.removeClass("header--fixed");
	// 		$header.slideUp(1300);
			
	// 	}

	// 	if ($scrollTopLast === 0) {
	// 		$header.css({
	// 			"position": "absolute",
	// 			"top": "80px",

	// 			"background-color": "none",
	// 			"padding": "0",

	// 			"box-shadow": "none",
	// 		});
	// 	}

	// 	$scrollTopLast = $scrollTop;
	// });

	// $headerBtn.on("click", function () {
	// 	$headerNav.toggleClass("header__nav--active");
	// });

	// $(window).scroll(function() {

	// })
});
