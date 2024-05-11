$('.banner_slider').slick({
    arrows: false,
    dots: true
});

$('.review_slider').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: `<i class="fa-solid fa-angle-left left"></i>`,
    nextArrow: `<i class="fa-solid fa-angle-right right"></i>` ,
    centerMode: true,
    centerPadding: '0',
});