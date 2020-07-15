'use strict';

(function($){
	$(document).ready(function() {

		// on focus
	$(".wpcf7-form input").focus(function() {
		$(this).parent().siblings('label').addClass('has-value');
		})
		// blur input fields on unfocus + if has no value
		.blur(function() {
			var text_val = $(this).val();
			if(text_val === "") {
				$(this).parent().siblings('label').removeClass('has-value');
			}
		});

	// Select
	$('.nselect-1, .nselect-2, .nselect-3, .nselect-4, .nselect-5, .nselect-6').nSelect();
	

	// $('.nselect-6').addClass('data-select');
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

// var galleryThumbs = new Swiper('.gallery-thumbs', {
// 	spaceBetween: 10,
// 	slidesPerView: 4,
// 	loop: true,
// 	freeMode: true,
// 	loopedSlides: 5, //looped slides should be the same
// 	watchSlidesVisibility: true,
// 	watchSlidesProgress: true,
//   });
//   var galleryTop = new Swiper('.gallery-top', {
// 	spaceBetween: 10,
// 	loop: true,
// 	loopedSlides: 5, //looped slides should be the same
// 	navigation: {
// 	  nextEl: '.swiper-button-next',
// 	  prevEl: '.swiper-button-prev',
// 	},
// 	thumbs: {
// 	  swiper: galleryThumbs,
// 	},
//   });

var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	thumbs: {
	  swiper: galleryThumbs
	}
  });

