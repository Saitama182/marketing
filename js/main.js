$(function(){
    var mixer = mixitup('.portfolio_content');
});


$('.portfolio a').fancybox({
    caption : function( instance, item ) {
      return $(this).parent().find('.card-text').html();
    }
  });