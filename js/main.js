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



    $('.navbar-toggler').click(function () {
        $(this).toggleClass('active');
    });



    //SHOW/HIDE SUBMENU




    var ekran = $(window).width();
    if (ekran < 992) {
        $('.navbar-nav').on('click', '.nav-link', function (e) {
            e.preventDefault();

            $(this).next('.submenu').slideToggle();

        });
    }

    $(window).resize(function () {

        ekran = $(window).width();
       if (ekran < 992) {
        $('.navbar-nav').on('click', '.nav-link', function (e) {
            e.preventDefault();

            $(this).next('.submenu').slideToggle();

        });
    }
    });



    //SHOW HIDE INPUT

    $('.search').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).find('.search-site-form').toggleClass('d-none d-block');
    });

    $('.mobile-search-toggle').click(function () {

        $(this).next('.search-site-form').toggle();

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


        //LOOK SLIDER
        if ($('.look-slider').length > 0) {
            $('.look-slider').owlCarousel({
                loop: true,
                margin: 0,
                responsiveClass: true,
                dots: false,
                autoplay: true,
                nav: true,
                navText: ['<img src="img/back-chevron-left.png">', '<img src="img/back-chevron-right.png">'],
                items: 2,
                autoplayHoverPause: true,
                responsive: {

                    768: {
                        items: 2
                    }, 
                    992:{
                        items: 3
                    }
                }


            });
        }











    }
















});


