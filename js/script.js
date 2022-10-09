"use strict"

$(document).ready(function(){
	$('.header__burger').click(function(event) {
		$('.header__body, .header__burger, .header__decor').toggleClass('burger')
		$('body').toggleClass('lock')
		$('body,html').animate({scrollTop: 0}, 400); 
	})
})
$(document).ready(function(){
	$('.doctors__item-1').hover(function(event) {
		$('.doctors__item-1').find('.doctors__properties, .doctors__speciallicy, .doctors__button').toggleClass('animation')
	})
})
$(document).ready(function(){
	$('.doctors__item-2').hover(function(event) {
		$('.doctors__item-2').find('.doctors__properties, .doctors__speciallicy, .doctors__button').toggleClass('animation')
	})
})
$(document).ready(function(){
	$('.doctors__item-3').hover(function(event) {
		$('.doctors__item-3').find('.doctors__properties, .doctors__speciallicy, .doctors__button').toggleClass('animation')
	})
})
$(document).ready(function(){
	$('.doctors__item-4').hover(function(event) {
		$('.doctors__item-4').find('.doctors__properties, .doctors__speciallicy, .doctors__button').toggleClass('animation')
	})
})


const swiper = new Swiper('.documents__slider', {
	slidesPerView:1,
	spaceBetween: 10,
	pagination: {
	  el: '.swiper-pagination',
	  dynamicBullets: true,
	},
	breakpoints: {
		
		425: {
			slidesPerView:2
		},
		768: {
			slidesPerView:3
		},
		992: {
			slidesPerView:4,
			spaceBetween: 20,
		},
		1300: {
			slidesPerView: 6,
		}
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  });


  
const swiper2 = new Swiper('.tools__slider', {
	slidesPerView:1,
	
	pagination: {
		el: '.tools__pagination',
		dynamicBullets: true,
	},
	navigation: {
		nextEl: '.tools__next',
		prevEl: '.tools__prev',
	  },
  });


  const swiper3 = new Swiper('.reviews__slider', {
	slidesPerView:1,
	spaceBetween: 10,
	breakpoints: {
		800: {
			slidesPerView: 2,
		},
	},
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
  });

  const swiper4 = new Swiper('.videos__slider', {
	slidesPerView:1,
	spaceBetween: 10,
	simulateTouch: false,
	breakpoints: {
		800: {
			slidesPerView: 2,
		},
	},
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
  });

  const swiper5 = new Swiper('.doctors-mobile', {
	slidesPerView:1,
	spaceBetween: 10,
	simulateTouch: false,
	breakpoints: {
		655: {
			slidesPerView: 2,
		},
	},
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
  });


var isBreakPoint = function (bp) {
    var bps = [320, 870, 2000],
        w = $(window).width(),
        min, max
    for (var i = 0, l = bps.length; i < l; i++) {
      if (bps[i] === bp) {
        min = bps[i-1] || 0
        max = bps[i]
        break
      }
    }
    return w > min && w <= max
}




$(document).ready(function() {
	if (isBreakPoint(2000)) {
		$(document).ready(function(){
			$('.services-button-1').click(function(event) {
				if ($(".price__services-button").hasClass("on")) {
					($(".price__services-button, .price__costs-list").removeClass("on"))
					($(".services-button-1, .price__cost-list-1").addClass("on"))
				} else {
					$(".services-button-1, .price__cost-list-1").removeClass("on")
				}
			})
		})
		  $(document).ready(function(){
			$('.services-button-2').click(function(event) {
				if ($(".price__services-button").hasClass("on")) {
					($(".price__services-button, .price__costs-list").removeClass("on"))
					($(".services-button-2, .price__cost-list-2").addClass("on"))
				} else {
					$(".services-button-2, .price__cost-list-2").removeClass("on")
				}
			})
		})
		  $(document).ready(function(){
			$('.services-button-3').click(function(event) {
				if ($(".price__services-button").hasClass("on")) {
					($(".price__services-button, .price__costs-list").removeClass("on"))
					($(".services-button-3, .price__cost-list-3").addClass("on"))
				} else {
					$(".services-button-3, .price__cost-list-3").removeClass("on")
				}
			})
		})
		$(document).ready(function(){
			$('.services-button-4').click(function(event) {
				if ($(".price__services-button").hasClass("on")) {
					($(".price__services-button, .price__costs-list").removeClass("on"))
					($(".services-button-4, .price__cost-list-4").addClass("on"))
				} else {
					$(".services-button-4, .price__cost-list-4").removeClass("on")
				}
			})
		})
		$(document).ready(function(){
			$('.services-button-5').click(function(event) {
				if ($(".price__services-button").hasClass("on")) {
					($(".price__services-button, .price__costs-list").removeClass("on"))
					($(".services-button-5, .price__cost-list-5").addClass("on"))
				} else {
					$(".services-button-5, .price__cost-list-5").removeClass("on")
				}
			})
		})
		
		$(document).ready(function(){
			$('.services-button-6').click(function(event) {
				if ($(".price__services-button").hasClass("on")) {
					($(".price__services-button, .price__costs-list").removeClass("on"))
					($(".services-button-6, .price__cost-list-6").addClass("on"))
				} else {
					$(".services-button-6, .price__cost-list-6").removeClass("on")
				}
			})
		})
		
		$(document).ready(function(){
			$('.services-button-7').click(function(event) {
				if ($(".price__services-button").hasClass("on")) {
					($(".price__services-button, .price__costs-list").removeClass("on"))
					($(".services-button-7, .price__cost-list-7").addClass("on"))
				} else {
					$(".services-button-7, .price__cost-list-7").removeClass("on")
				}
			})
		})
		
		$(document).ready(function(){
			$('.services-button-8').click(function(event) {
				if ($(".price__services-button").hasClass("on")) {
					($(".price__services-button, .price__costs-list").removeClass("on"))
					($(".services-button-8, .price__cost-list-8").addClass("on"))
				} else {
					$(".services-button-8, .price__cost-list-8").removeClass("on")
				}
			})
		})
		
		$(document).ready(function(){
			$('.services-button-9').click(function(event) {
				if ($(".price__services-button").hasClass("on")) {
					($(".price__services-button, .price__costs-list").removeClass("on"))
					($(".services-button-9, .price__cost-list-9").addClass("on"))
				} else {
					$(".services-button-9, .price__cost-list-9").removeClass("on")
				}
			})
		})
		
		$(document).ready(function(){
			$('.services-button-10').click(function(event) {
				if ($(".price__services-button").hasClass("on")) {
					($(".price__services-button, .price__costs-list").removeClass("on"))
					($(".services-button-10, .price__cost-list-10").addClass("on"))
				} else {
					$(".services-button-10, .price__cost-list-10").removeClass("on")
				}
			})
		})
	}
	if (isBreakPoint(870)) { 
		$(".price__cost-list-1").removeClass("on");
		$(".services-button-1").removeClass("on");
		$(document).ready(function(){
			$(".price__services-container-1").click(function(event){
				$(".price__services-content-1, .price__services-button-1").toggleClass("open")
			})
		})
		
	 }

})



document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('.header')
	const mainContent = document.querySelector('.main__text-content');
	const statisticItems = document.querySelector('.statictic__items')
	const image = document.querySelector('.main__image')
	const imageMobile = document.querySelector('.main__image-mobile')
	const whywe = document.querySelector('.whywe__body')
	header.classList.add('animation');
	mainContent.classList.add('animation');
	statisticItems.classList.add('animation');
	image.classList.add('animation')
	whywe.classList.add('animation')
	imageMobile.classList.add('animation')


	const burgerHeader = document.querySelector('.header__body')
	const body = document.body

	if (burgerHeader.classList.contains('burger')) {
		body.classList.toggle('lock')
	}
});



document.addEventListener('DOMContentLoaded', () => {
	const textMore = document.querySelectorAll('.reviews__review')
	textMore.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget
			const content = self.querySelector('.reviews__text-content')
			const allText = self.querySelector('.reviews__more-text')

			self.classList.toggle("open")

			if (self.classList.contains("open")) {
				allText.style.maxHeight = allText.scrollHeight + 'px'
			} else {
				allText.style.maxHeight = null
			}
		})
	})

});



$(document).ready (function() {
	$.each($('.enrol__checkbox'), function(index, val) {
		if ($(this).find('input').prop("checked")==true) {
			$(this).addClass('checked')
		}
	})

	$(document).on('click', ".enrol__checkbox", function(event) {
		if($(this).hasClass("checked")) {
			$(this).find('input').prop("checked", false)
		} else {
			$(this).find('input').prop("checked", true)
		}

		$(this).toggleClass('checked')
		return false
	}) 
})


const mobileBtn = document.querySelectorAll(".price-mobile__button")
const mobileItem = document.querySelectorAll(".price-mobile__item")


mobileItem.forEach(e => {
	e.addEventListener('click', (e) => {
		const self = e.currentTarget
		const button = self.querySelector(".price-mobile__button")
		const content = self.querySelector(".price-mobile__content")
		
		self.classList.toggle('open')
		button.classList.toggle('on')
		if (self.classList.contains("open")) {
			content.style.maxHeight = content.scrollHeight + 'px'
		} else {
			content.style.maxHeight = null
		}
 	})
});


let wrapMap = document.querySelector('#wrapMap')
var mapTitle = document.createElement('div'); mapTitle.className = 'mapTitle';
mapTitle.textContent = 'Для активации карты нажмите по ней';
wrapMap.appendChild(mapTitle);
wrapMap.onclick = function() {
	this.children[0].removeAttribute('style');
	mapTitle.parentElement.removeChild(mapTitle);
}
wrapMap.onmousemove = function(event) {
	mapTitle.style.display = 'block';
	if(event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
	if(event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
}
wrapMap.onmouseleave = function() {
	mapTitle.style.display = 'none';
}