$(document).ready(function(){
    
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
    
    $(window).scroll(function(){
        animation();
    });
    
    
    
    
    //***********LEAD NAVIGATION **************
    
     $('.navbar-toggler').click(function(){
        $(this).toggleClass('active');
    });

    function animation() {

        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();

        $('.animation').each(function () {
            var position = $(this).offset().top;

            if (position < scrollDown + windowHeight - 50) {
                var animacija = $(this).attr('data-animation');
                $(this).addClass(animacija);
            }
        });
    }
    
    
});


