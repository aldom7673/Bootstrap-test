$(document).ready(function(){
    $('#mycarousel').carousel({ interval:500 });
    
    $('#login').click(function(){
        $('#loginModal').modal('toggle');
    });

    $('#reserve').click(function(){
        $('#reservationModal').modal('toggle');
    });

    $('#carouselButton').click(function() {
        if( $('#carouselButton').children('span').hasClass('fa-pause') ){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').addClass('fa-play');
            $('#carouselButton').children('span').removeClass('fa-pause');                    
        }else{
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').addClass('fa-pause');
            $('#carouselButton').children('span').removeClass('fa-play');                    
        }
    });
});