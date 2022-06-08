$(function () {
	$btn = $("#header-btn");
	$nav = $("#header-nav");
	$links = $(".header__link");

	$nav.removeClass("show");

	$btn.on("click", () => {
		$nav.addClass("show");
	});

	$(window).on("click", function (event) {
		if ($(event.target).is($("#header-nav"))) {
			$nav.removeClass("show");
		}

		for ($link of $links) {
			if ($(event.target).is($link)) {
				$nav.removeClass("show");
			}
		}
	});
});
