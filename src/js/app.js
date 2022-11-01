$(document).ready(function(){
    $('.subheader-slider--item').slick({
        prevArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            },
        ],
        arrows: true
    })
    $('.quiet_books-list').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        swipeToSlide: true,
        centerMode : true,
        infinite: true,
        responsive: [
            {
                breakpoint: 660,
                settings: 'unslick'
            }
        ],
    })
    $('.discover-block--slider').slick({
        prevArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ],
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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode : false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    centerMode : false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    centerMode : false,
                    slidesToShow: 1,
                    variableWidth: false
                }
            },
        ],
        swipeToSlide: true,
        
        variableWidth: true
    })
    $('.review-slider').slick({
        prevArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        slidesToShow:2,
        responsive: [
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        slidesToScroll:1
    })
    $('.our_categories-slider').slick({
        arrows: false,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            }
        ],
        infinite: false,
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
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    })
    $('.follow_us-list').slick({
        dots: false,
        arrows: false,
        slidesToShow: 6,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1
                }
            },
        ],
        swipeToSlide: true,
        slidesToScroll: 1
    })
});


const iconMenu = document.querySelector(".menu-icon");
const mobileMenuBlock = document.querySelector(".mobile-menu")

if (iconMenu) {
  
  iconMenu.addEventListener("click", function() {
    iconMenu.classList.toggle("_active");
    mobileMenuBlock.classList.toggle("_active");
    document.body.classList.toggle("_lock");
  })
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}