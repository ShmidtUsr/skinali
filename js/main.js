$(window).load(function() {
    $(".before-after").twentytwenty({
       before_label: 'Без скинали', // Set a custom before label
       after_label: 'С скинали', 
    });
    $('.before-slider').slick({
       draggable: false,
       dots: true,
       dotsClass: 'before-slider__dots',
       prevArrow: $('.arrow-left'),
       nextArrow: $('.arrow-right'),
    });
    $('.reviews-slider').slick({
        dots: true,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.review-arrow-left'),
        nextArrow: $('.review-arrow-right'),
     });
    $('.menu-button').on('click', function(){
        $('.menu').toggleClass('menu_active');
    });
    $('.menu-button').on('click', function(go){
        $('.menu-button').toggleClass('decoration');
    });
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top -100 + "px"});
    return false;
    });
    $('input[type="tel"]').mask("+7 (999) 999-99-99");
    /*Показывать карту только когда докрутили до неё*/
    var reviews = $('.reviews');
    var reviewsTop = reviews.offset().top;
    $(window).bind('scroll', function () {
        var windowTop = $(this).scrollTop();
        if (windowTop > reviewsTop) {
            $('.map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A6bf9303fb583f9e430a359f17a9b9bf3f7a92b9ec8c1cc6dc670dd1fde22ce0c&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>')
            $(window).unbind('scroll')
        }
    });
});
