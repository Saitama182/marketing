$(function(){
    var mixer = mixitup('.portfolio_content');

    $('.slider-blog_inner').slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="../images/svg/arrow-left.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../images/svg/arrow-right.svg" alt=""></button>',
    });
});


$('.portfolio a').fancybox({
    caption : function( instance, item ) {
      return $(this).parent().find('.card-text').html();
    }
  });



