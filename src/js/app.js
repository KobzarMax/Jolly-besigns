import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp()

$(document).ready(function(){
    $('.subheader-slider ').slick({
        prevArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-right"></i></button>',
    })
    $('.discover-block--slider').slick({
        prevArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        dots: true
    })
    $('.retailer_stores-block--slider').slick({
        dots: true,
        arrows: false
    })
    $('.bestseller-slider').slick({
        dots: true,
        arrows: false,
        slidesToShow :3,
        slidesToScroll:1,
        centerMode : true,
        focusOnSelect: true,
        variableWidth: true
    })
    $('.review-slider').slick({
        prevArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        slidesToShow:2,
        slidesToScroll:1
    })
    $('.our_categories-slider').slick({
        arrows: false,
        slidesToShow :4,
        infinite :false,
    })
    $('.meet_our_team-slider').slick({
        prevArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        dots: true,
         customPaging: function (slider, i) {
			var title = $(slider.$slides[i]).data('title');
			return '<span class="dots__item"><span class="dots__number">0'+ Number(i+1) + '</span>' + title + ' </span>';
		}, 
		dotsClass: 'slider-dots',
    })
    $('.follow_us-slider').slick({
        dots: false,
        arrows: false
    })
});