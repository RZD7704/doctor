'use strict';

(function($){
	$(document).ready(function() {
		// Code
		// var mySwiper = $('.swiper-container').swiper({
		// 	slidesPerView:4,
		// 	spaceBetween: 30,
		// 	pagination: {
		// 	  el: '.swiper-pagination',
		// 	  clickable: true,
		// 	}
		//   });
		//   $(window).resize(function(){
		// 	var ww = $(window).width()
		// 	if (ww>1000) mySwiper.params.slidesPerView = 4;
		// 	if (ww>468 && ww<=1000) mySwiper.params.slidesPerView = 3;
		// 	if (ww<=468) mySwiper.params.slidesPerView = 3;
		// 	mySwiper.reInit();
		//   });
		//   $(window).trigger('resize');
	});
})(jQuery);

var swiper = new Swiper('.swiper-container', {
	slidesPerView: 4,
	spaceBetween: 30,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
		  slidesPerView: 1,
		  spaceBetween: 20
		},
		400: {
			slidesPerView: 2,
			spaceBetween: 20
		  },
		// when window width is >= 480px
		768: {
		  slidesPerView: 3,
		  spaceBetween: 30
		},
		// when window width is >= 640px
		992: {
		  slidesPerView: 4,
		  spaceBetween: 40
		}
	  }
	// breakpoints: {
    //     960: {
	// 		slidesPerView: 3,
	// },
  });
