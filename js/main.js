$(function() {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,


        autoplay: true,
        autoplaySpeed: 2500,

    });
    $('.photo__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>'
    });

});