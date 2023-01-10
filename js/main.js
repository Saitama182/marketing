$(function(){
    

    $('.slider-blog_inner').slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="../images/svg/arrow-left.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../images/svg/arrow-right.svg" alt=""></button>',
    });

    $('.menu_btn').on('click' , function(){
      $('.header_top-inner').toggleClass('header_top-inner--active');
     
    });

    var mixer = mixitup('.portfolio_content');

});


$('.portfolio a').fancybox({
    caption : function( instance, item ) {
      return $(this).parent().find('.card-text').html();
    }
  });



