$(document).ready(function () {

    function animation() {

        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();

        $('.animation').each(function () {
            var position = $(this).offset().top;

            if (position < scrollDown + windowHeight - 100) {
                var animacija = $(this).attr('data-animation');
                $(this).addClass(animacija);
            }
        });
    }

    animation();

    $(window).scroll(function () {
        animation();
    });




    //***********LEAD NAVIGATION **************

    $('.submenu a').click(function () {
        $(this).toggleClass('active');
    });

    

    //SHOW/HIDE SUBMENU
   
if ( $(window).width() < 992) {      
   $('.nav-link').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).next('.submenu').slideToggle();
    });
} 



    //SHOW HIDE INPUT

    $('.search').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).find('.search-site-form').toggleClass('d-none d-block');
    });

    //OWL CAROUSEL

    if ($('.owl-carousel').length > 0) {

        $('.lead-slider').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            dots: true,
            autoplay: true,
            nav: false,
            items: 1,
            autoplayHoverPause: true,
            responsive: {

                0: {
                    items: 1
                }
            }


        });


    }
















});


