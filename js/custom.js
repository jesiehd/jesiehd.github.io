

if ($('.main-caro').length) {
  $('.main-caro').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    mobileFirst: true,
  // responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   // You can unslick at a given breakpoint now by adding:
  //   // settings: "unslick"
  //   // instead of a settings object
  //   ]
    });
}


if ($('.grid').length) {
  var $grid = $('.grid').isotope({
  // options
    itemSelector: '.element-item',
    });
  }

  // bind filter button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// console.log( $("body").height() );
// console.log( $(window).height() );

var bodyHeight = $("body").height();
var windowHeight = $(window).height();

if (bodyHeight < windowHeight) {
  $("footer").addClass("footerfixed");
}