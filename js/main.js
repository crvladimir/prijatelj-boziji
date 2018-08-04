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
    
     //SHOW/HIDE SUBMENU
    
    $('.toggle-submenu').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        
        $(this).parent().next('.submenu').slideToggle();
    });
    
    //SUBMENU ACTIVE CLASS
    
     $('.submenu a').click(function(){
                
        $(this).addClass('active');
    })
    
    
    //SHOW HIDE INPUT
    
      $('.search').click(function(){
               
        $(this).find('.search-site-form').addClass('d-block');
       //$(this).toggleClass('fa-search fa-close');
       //$(this).closest('.search-site-form').slideToggle();
    });
    
    //OWL CAROUSEL
    
    if ($('.owl-carousel').length > 0) {
        
        $('.lead-slider').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            dots: true,
            autoplay: true,
            nav:false,
            items:1

          
        });
    
      }
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});


