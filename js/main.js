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

var swiper = new Swiper('.swiper-our-clinics', {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
	  el: '.swiper-points',
	  clickable: true,
	},
	breakpoints: {
		// when window width is >= 320px
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

var swiper = new Swiper('.swiper-clinics', {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
	  el: '.swiper-pagination-clinics',
	  clickable: true,
	},
	breakpoints: {
		// when window width is >= 320px
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

var swiper = new Swiper('.swiper-doctors', {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
	  el: '.swiper-pagination-doctors',
	  clickable: true,
	},
	breakpoints: {
		// when window width is >= 320px
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

var swiper = new Swiper('.swiper-portfolio', {
	slidesPerView: 1,
	spaceBetween: 30,
	// pagination: {
	//   el: '.swiper-points',
	//   clickable: true,
	// },
	breakpoints: {
		// when window width is >= 320px
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

var swiper = new Swiper('.swiper-kabinet', {
	slidesPerView: 1,
	spaceBetween: 30,
	// pagination: {
	//   el: '.swiper-points',
	//   clickable: true,
	// },
	breakpoints: {
		// when window width is >= 320px
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

var swiper = new Swiper('.d-portfolio-container', {
	slidesPerView: 1,
	spaceBetween: 30,
	// pagination: {
	//   el: '.swiper-points',
	//   clickable: true,
	// },
	breakpoints: {
		// when window width is >= 320px
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

var swiper = new Swiper('.portfolio-container', {
	slidesPerView: 1,
	spaceBetween: 30,
	// pagination: {
	//   el: '.swiper-points',
	//   clickable: true,
	// },
	breakpoints: {
		// when window width is >= 320px
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


(function(){
	function init(selector){
		var calendar = document.querySelector(selector);
		if(calendar){
		var dates = calendar.querySelector('.dates');
		var monthArr = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
		var dateObj = new Date();
		var nowDate = dateObj.getDate();
		var nowMonth = dateObj.getMonth();
		var nowYear = dateObj.getFullYear();
		var prevMonth = calendar.querySelector('.prevMonth');
		var nextMonth = calendar.querySelector('.nextMonth');
		var monthTxtElem = calendar.querySelector('.month');
		var yearTxtElem = calendar.querySelector('.year');
		prevMonth.addEventListener('click', function(e){
			e.preventDefault(e);
			dates.innerHTML = '';
			nowMonth--;
			if(nowMonth < 0){
				nowMonth = 11;
				nowYear--;
			}
			drawCalendar(dates, nowYear, nowMonth, nowDate, monthTxtElem, yearTxtElem, monthArr);
		});
		nextMonth.addEventListener('click', function(e){
			e.preventDefault(e);
			dates.innerHTML = '';
			nowMonth++;
			if(nowMonth > 11){
				nowMonth = 0;
				nowYear++;
			}
			drawCalendar(dates, nowYear, nowMonth, nowDate, monthTxtElem, yearTxtElem, monthArr);
		});
		drawCalendar(dates, nowYear, nowMonth, nowDate, monthTxtElem, yearTxtElem, monthArr);
	}
}

	function drawCalendar(datesSelector, year, month, date, monthEl, yearEl, monthArr){
		var dateArr = fillArray(1, getLastDateMonth(year, month + 1, 0));
		dateArr = shiftLastDatesPrevMonth(dateArr, year, month, 0);
		dateArr = popFirstDatesNextMonth(dateArr, year, month, getLastDateMonth(year, month + 1, 0));
		dateArr = chunkArray(dateArr, 7);
		monthEl.innerHTML = monthArr[month];
		yearEl.innerHTML = year;
		createElems(dateArr, datesSelector);
	}

	function getLastDateMonth(year, month, date){
		var date = new Date(year, month, date);
		var result = date.getDate();
		return result;
	}

	function fillArray(from, to){
		var array = [];
		for (var i = from; i <= to; i++) {
			array.push(i);
		}
		return array;
	}

	function chunkArray(arr, size){
		var newArr = [];
		for (var i = 0; i < arr.length; i += size) {
			newArr.push(arr.slice(i, i + size));
		}
		return newArr;
	}

	function createElems(arr, parent){
		for (var i = 0; i < arr.length; i++) {
			var tr = document.createElement('tr');
			for(var j = 0; j < arr[i].length; j++){
				var td = document.createElement('td');
				td.innerHTML = arr[i][j];
				if(j > 1 && arr[i][j] != '' && (j % 5 == 0 || j % 6 == 0)){
					td.classList.add('weekend');
				}
				tr.appendChild(td);
			}
			parent.appendChild(tr);
		}
	}

	function shiftLastDatesPrevMonth(arr, year, month, day){
		var date = new Date(year, month, day);
		var lastDay = date.getDay();
		var lastDate = date.getDate();
		for(var i = lastDate; i > lastDate - lastDay; i--){
			arr.unshift('');
		}
		return arr;
	}

	function popFirstDatesNextMonth(arr, year, month, day){
		var date = new Date(year, month, day);
		var firstDay = date.getDay();
		var firstDate = date.getDate();
		if(firstDay != 0){
			for(var i = firstDay; i < 7; i++){
				arr.push('');
			}
		}
		return arr;
	}

	init('#calendar');
	init('#calendarPopup');

})();


function Gallery(selector, setting){
	var getGallery = document.getElementById(selector);
	if(getGallery) {
		var getGalleryChild = getGallery.querySelectorAll('.gallery-portfolio__item');
		var gallerySetting = {
			numItem: setting.numItem || false,
			numItemTxt: setting.numItemTxt || 'Фото',
			description: setting.description || false,
			form: setting.form || false,
			fields: setting.fields || false,
			nav: setting.nav,
			navItems: setting.navItems || ['<button class="prev slide-back"><svg><use xlink:href="images/sprite.svg#slide-arr"></use></svg></button>', '<button class="next slide-next"><svg><use xlink:href="images/sprite.svg#slide-arr"></use></svg></button>'],
			createFormMethod: function(content, fields){
				var createForm = document.createElement('form');
				createForm.id = 'gallery-form';
				for(var i = 0; i < fields.length; i++){
					createForm.insertAdjacentHTML('beforeend', fields[i]);
				}
				content.appendChild(createForm);
			},
			createNav: function(content, navs, items, activeItem, img){
				var numItemsEl = content.querySelector('.gallery-num-items');
				var descriptionEl = content.querySelector('.gallery-description');
				var itemNum = Array.from(items).indexOf(activeItem);
				content.insertAdjacentHTML('beforeend', navs[0]);
				var prevBtn = content.lastChild;
				content.insertAdjacentHTML('beforeend', navs[1]);
				var nextBtn = content.lastChild;
				prevBtn.addEventListener('click', function(){
					itemNum--;
					if(itemNum < 0){
						itemNum = items.length - 1;
					}
					if(numItemsEl){
						numItemsEl.innerHTML = gallerySetting.numItemTxt + ' ' + (itemNum + 1) + '/' + items.length;
					}
					if(descriptionEl){
						descriptionEl.innerHTML = items[itemNum].dataset.desc;
					}
					img.setAttribute('src', items[itemNum].getAttribute('href'));
				});
				nextBtn.addEventListener('click', function(){
					itemNum++;
					if(itemNum > items.length - 1){
						itemNum = 0;
					}
					if(numItemsEl){
						numItemsEl.innerHTML = gallerySetting.numItemTxt + ' ' + (itemNum + 1) + '/' + items.length;
					}
					if(descriptionEl){
						descriptionEl.innerHTML = items[itemNum].dataset.desc;
					}
					img.setAttribute('src', items[itemNum].getAttribute('href'));
				});
				
			}
		};
		getPathItem(gallerySetting, getGalleryChild);
		createModal(gallerySetting, getGalleryChild);
		closeGallery('gallery-modal');
	}

	function getPathItem(setting, items){
		for(var i = 0; i < items.length; i++){
			items[i].addEventListener('click', function(e){
				e.preventDefault();
				var modal = activeModal();
				setModalElems(setting, modal, items, this);
			});
		}
	}

	function createModal(setting, items) {
		var modal =  document.createElement('div');
		var modalLayout = document.createElement('div');
		modal.id = 'gallery-modal';
		modal.classList.add('gallery-modal-style');
		modalLayout.classList.add('gallery-layout');
		document.body.appendChild(modal);
		modal.appendChild(modalLayout);
		if(setting.numItem){
			for(var i = 0; i < items.length; i++){
				items[i].dataset.num = i + 1;
			}
		}
	}

	function activeModal() {
		var modal = document.getElementById('gallery-modal');
		document.body.classList.add('modal-active');
		modal.classList.add('active');
		return modal;
	}

	function setModalElems(setting, modal, items, activeItem) {
		var createGalleryContent = document.createElement('div');
		var createImg = document.createElement('img');
		createGalleryContent.classList.add('gallery-content');
		createImg.setAttribute('src', activeItem.getAttribute('href'));
		modal.appendChild(createGalleryContent);
		createGalleryContent.appendChild(createImg);
		if(setting.numItem){
			var createNumItems = document.createElement('div');
			createNumItems.classList.add('gallery-num-items');
			createNumItems.innerHTML = setting.numItemTxt + ' ' + activeItem.dataset.num + '/' + items.length;
			createGalleryContent.prepend(createNumItems);
		}
		if(setting.description){
			var createDescription = document.createElement('p');
			createDescription.classList.add('gallery-description');
			createDescription.innerHTML = activeItem.dataset.desc;
			createGalleryContent.append(createDescription);
		}
		if(setting.form){
			setting.createFormMethod(createGalleryContent, setting.fields);
		}
		if(setting.nav == undefined || setting.nav){
			setting.createNav(createGalleryContent, setting.navItems, items, activeItem, createImg);	
		}
	}
	
	function closeGallery(selector){
		var modal = document.getElementById(selector);
		var layoutGallery = modal.querySelector('.gallery-layout');
		layoutGallery.addEventListener('click', function(){
			var contentGallery = modal.querySelector('.gallery-content');
			if(contentGallery.parentNode){
				contentGallery.parentNode.removeChild(contentGallery);
			}
			modal.classList.remove('active');
		});
	}
};

var galleryPortfolio = new Gallery('gallery-portfolio', {
	numItem: true,
	description: true,
	form: true,
	fields: ['<div class="form-block"><textarea name="id" placeholder="Написати..."></textarea> <button type="submit"><svg class="form-block--svg"><use xlink:href="images/sprite.svg#arr-right"></use></svg></button></div>'],
	// navItems: ['<button class="">vfdvcvc</button>', '<button class="">g</button>']
});

var galleryCabinet = new Gallery('gallery-cabinet', {
	numItem: true,
	description: true,
	form: true,
	fields: ['<div class="form-block"><textarea name="id" placeholder="Написати..."></textarea> <button type="submit"><svg class="form-block--svg"><use xlink:href="images/sprite.svg#arr-right"></use></svg></button></div>'],
	// navItems: ['<button class="">vfdvcvc</button>', '<button class="">g</button>']
});
