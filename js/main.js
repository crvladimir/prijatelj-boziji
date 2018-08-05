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
        $(this).addClass('active');
    });

    $('.navbar-toggler', '.submenu a').click(function () {
        $(this).toggleClass('active');
    });

    //SHOW/HIDE SUBMENU
    $('.toggle-submenu').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).parent().next('.submenu').slideToggle();
    });



    //SHOW HIDE INPUT

    $('.search').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).find('.search-site-form').toggleClass('d-none d-block');
    });

    //OWL CAROUSEL





















});


