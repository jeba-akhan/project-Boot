
$('.slider-banner').slick({
    arrows: false,
    dots: true,
});


$('.review_slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: `<i class="fa-solid fa-angle-left left"></i>`,
    nextArrow: `<i class="fa-solid fa-angle-right right"></i>`,
    centerMode: true,
    centerPadding: '0px',

    responsive: [
        
        // {
        //   breakpoint: 767.99,
        //   settings: {
        //     slidesToShow: 2,
        //     slidesToScroll: 1,
        //     centerMode: false,
        //   }
        // }

         
        {
          breakpoint: 575.99,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          }
        }
        
      ]
});