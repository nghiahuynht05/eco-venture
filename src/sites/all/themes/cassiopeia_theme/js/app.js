(function ($) {
	$(document).ready(function () {
		$('[data-fancybox="gallery"]').fancybox({
			thumbs: {
				autoStart: true,
				axis: "y",
			},
			caption: function (instance, item) {
				var caption = $(this).data("caption") || "";

				return caption.length ? caption + "<br />" : "";
			},
		});

		var owlBanner = $('.slider-banner').owlCarousel({
			items:1,
			dots: false,
			loop: true,
			nav:false,
			autoplay:true,
			animateOut: 'fadeOut',
			autoplayTimeout:5000,
			autoplayHoverPause:false,
		})
		var owlDestinations = $('.slider-destinations').owlCarousel({
			items:3,
			loop:true,
			nav: true,
			dots: false,
			navText:["<i class=\"fa-solid fa-chevron-left\"></i>","<i class=\"fa-solid fa-chevron-right\"></i>"],
			margin:30,
		})
		var owlSellingTrip = $('.slider-selling-trip').owlCarousel({
			loop:true,
			nav: false,
			dots: true,
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:false,
			smartSpeed: 2000,
			responsive: {
				0: {
				  items: 1,
				  margin: 10,
				},
				600: {
				  items: 2,
				  margin: 15,
				},
				992: {
				  items: 3,
				  margin: 30,
				}
			}
		})
		var owlSinglep = $('.slider-single').owlCarousel({
			items:1,
			loop:true,
			nav: false,
			dots: true,
			navText:["<i class=\"fa-solid fa-chevron-left\"></i>","<i class=\"fa-solid fa-chevron-right\"></i>"],
			margin:30,
			autoplay:true,
			animateOut: 'fadeOut',
			autoplayTimeout:4000,
			autoplayHoverPause:true,
		})
		var owlAbout = $('.slider-about-us').owlCarousel({
			items:1,
			loop:true,
			nav: true,
			dots: false,
			navText:["<i class=\"fa-solid fa-chevron-left\"></i>","<i class=\"fa-solid fa-chevron-right\"></i>"],
			margin:30,
			autoplay:true,
			animateOut: 'fadeOut',
			autoplayTimeout:4000,
			autoplayHoverPause:true,
		})
		var owlSellingTripDestination = $('.slider-selling-trip-destination').owlCarousel({
			loop:true,
			nav: true,
			dots: false,
			navText:["<i class=\"fa-solid fa-chevron-left\"></i>","<i class=\"fa-solid fa-chevron-right\"></i>"],
			responsive: {
				0: {
				  items: 1,
				  margin: 10,
				},
				600: {
				  items: 2,
				  margin: 15,
				},
				992: {
				  items: 3,
				  margin: 30,
				}
			}
		})
		var owlResidences = $('.slider-residences').owlCarousel({
			items:3,
			loop:true,
			nav: true,
			dots: false,
			navText:["<i class=\"fa-solid fa-chevron-left\"></i>","<i class=\"fa-solid fa-chevron-right\"></i>"],
			margin:30,
		})
		var owlResidences = $('.slider-page-residences').owlCarousel({
			center: true,
			items:2,
			loop:true,
			nav: true,
			dots: false,
			navText:["<i class=\"fa-light fa-chevron-left\"></i>","<i class=\"fa-light fa-chevron-right\"></i>"],
			margin:30,
			smartSpeed:2000,
		})
		var owlSellingTrip = $('.slider-press').owlCarousel({
			items:3,
			loop:true,
			nav: true,
			dots: false,
			navText:["<i class=\"fa-light fa-chevron-left\"></i>","<i class=\"fa-light fa-chevron-right\"></i>"],
			margin:30,
		})
		var owlResidences = $('.slider-popup-sustainability').owlCarousel({
			center: true,
			items:2,
			loop:true,
			nav: true,
			dots: false,
			navText:["<i class=\"fa-light fa-chevron-left\"></i>","<i class=\"fa-light fa-chevron-right\"></i>"],
			margin:30,
			smartSpeed:2000,
		})
		var owlResidences = $('.slider-produce-more').owlCarousel({
			items:4,
			loop:true,
			nav: false,
			dots: false,
			margin:30,
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
			smartSpeed:1500,
		})

		var _toTop_ = 0;
		$(window).on("scroll", function () {
			$("header").toggleClass("active", window.scrollY > _toTop_);
		});

		$('.sidebar-block-title').click(function (e) {
			$(this).parent().toggleClass('open');
		});
		$(".title-form-register").click(function (e) {
			$(".form-register form").toggleClass("open");
		})

		$('.header-menu-mb > span').click(function (e) {
			$(".header-menu").toggleClass("open");
		});
		$(".header-menu-mb").click(function (e) {
			$(this).toggleClass("active");
		});

		$(".header-menu > ul > li").click(function (e) {
			$(this).toggleClass("open");
		});

		$(".close-filter-hotel-mb").click(function (e) {
			$(".box-filter").toggleClass("open");
		});


		$('.myModal').on('show.bs.modal', function(e) {
			$(window).resize();
		});
		$('.imageGallery').lightSlider({
			gallery:true,
			item:1,
			loop:true,
			thumbItem:5,
			slideMargin:0,
			enableDrag: false,
			currentPagerPosition:'left',
		});

		var _screen_ = $(window).innerWidth();
		if (_screen_ <= 768) {
			$(".vertical").lightSlider({
				gallery: true,
				item: 1,
				loop: true,
				thumbItem: 4,
				thumbMargin: 10,
				slideMargin: 10,
			});
		} else {
			$(".vertical").lightSlider({
				gallery:true,
				item:1,
				loop: true,
				vertical:true,
				verticalHeight:523,
				vThumbWidth:140,
				thumbItem:4,
				thumbMargin:16,
				slideMargin:10
			});
		}

		var showAll = $(".show-all-item");
		var hiddenAll = $(".hidden-all-item");
		hiddenAll.css("display", "none");

		var collapseItems = $(".schedule-collapse-content");

		showAll.on("click", function (e) {
			e.preventDefault();
			$(this).css("display", "none");
			collapseItems.each((ind, el) => $(el).collapse("show"));
			$(this).siblings("button").css("display", "block");
		});

		hiddenAll.on("click", function (e) {
			e.preventDefault();
			$(this).css("display", "none");
			collapseItems.each((ind, el) => $(el).collapse("hide"));
			$(this).siblings("button").css("display", "block");
		});

		$(".list-home-experience > ul > li").hover(function (e) {
			e.preventDefault();
			var _href = $(this).attr("href");
			$(".list-home-experience > ul > li").removeClass("active");
			$(this).addClass("active");
			var tid = $(this).attr('data-tid');
			console.log(tid)
			$('.experience-change-image-js').css('display', 'none');
			$('.experience-change-image-js[data-tid='+tid+']').css('display', 'block');

		});

		$(".link-destination-detail ul li a").on("click", function (e) {
			e.preventDefault();
			var _href = $(this).attr("href");
			$(".link-destination-detail ul li a").removeClass("active");
			$(this).addClass("active");
			$("html, body").animate(
				{
					scrollTop: $(_href).offset().top - 100,
				},
				800
			);
		});
		$(".page-introduce-item a").on("click", function (e) {
			e.preventDefault();
			var _href = $(this).attr("href");
			$("html, body").animate(
				{
					scrollTop: $(_href).offset().top - 100,
				},
				800
			);
		});

		// btn tang giam so luong
		$('input.input-qty').each(function() {
			var $this = $(this),
				qty = $this.parent().find('.is-form'),
				min = Number($this.attr('min')),
				max = Number($this.attr('max'))
			if (min == 0) {
				var d = 0
			} else d = min
			$(qty).on('click', function() {
				if ($(this).hasClass('minus')) {
					if (d > min) d += -1
				} else if ($(this).hasClass('plus')) {
					var x = Number($this.val()) + 1
					if (x <= max) d += 1
				}
				$this.attr('value', d).val(d)
				$('.qty-quick').val(d)
			})
		})

		var minPrice = 0;
		var maxPrice = 10000000;
		var valueMin = minPrice;
		var valueMax = maxPrice;

		if($("input.fromPrice").length){
			// minPrice = parseInt($("input.fromPrice").val().replaceAll(".",""));
			valueMin = parseInt($("input.fromPrice").attr('data-value'));
		}
		if($("input.toPrice").length){
			// maxPrice = parseInt($("input.toPrice").val().replaceAll(".",""));
			valueMax = parseInt($("input.toPrice").attr('data-value'));
		}
		$("#priceRange").slider({
			min: minPrice,
			max: maxPrice,
			step: 50000,
			values: [valueMin, valueMax],
			slide: function(event, ui) {
				console.log(ui);
				for (var i = 0; i < ui.values.length; ++i) {
					$("input.sliderValue[data-index=" + i + "]").val(addCommas(ui.values[i]));
				}
				setTimeout(function(e) {
					$("#tour-list").trigger("submit");
				}, 500)
			}
		});

		$(".datepicker").datepicker({
			changeMonth: true,
			changeYear: true,
			dateFormat: "dd-mm-yy",
			minDate: new window.Date(),
			yearRange: "0:+10",
		});

		$(".icon-play-introduce").on("click", function (e) {
			e.preventDefault();
	
			var videoIframe = $(this).data("video");
			$(this).parent().html(videoIframe);
			var symbol = $(".video-home-introduce iframe")[0].src.indexOf("?") > -1 ? "" : "?";
			$(".video-home-introduce iframe")[0].src += symbol + "autoplay=1";
		});

	});

	function addCommas(nStr)
	{
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + '.' + '$2');
		}
		return x1 + x2;
	}
})(jQuery);
