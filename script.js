$(document).ready(function(){ 

    $('.carousel1').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        // nav:true,
        // navText: [
        //     '<i class="fas fa-arrow-left"></i>',
        //     '<i class="fas fa-arrow-right"></i>'
        // ],
        stagePadding: 0,
        dots: false,
        smartSpeed:2500,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:2,
            }
        }
    });

});