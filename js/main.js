$(function(){

  $(".menu a, .go-top").on("click", function (e) {
		
		e.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
    

    $('.slider-blog_inner').slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="../images/svg/arrow-left.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../images/svg/arrow-right.svg" alt=""></button>', 
      responsive: [
        {
          breakpoint: 769,
          settings: {
            arrows:false
          }
        }
             
      ]
    });

    $('.menu_btn, .menu a').on('click' , function(){
      $('.header_top-inner').toggleClass('header_top-inner--active');
      
     
    });

    var mixer = mixitup('.portfolio_content');

});


$('.portfolio a').fancybox({
    caption : function( instance, item ) {
      return $(this).parent().find('.card-text').html();
    }
  });



