$(function() {
    $('.tab').on('click',function() {
    $('.tab, .panel').removeClass('active');
    $(this).addClass('active');

    var index = $('.tab').index(this);
    $('.panel').eq(index).addClass('active');
  });
});
$(window).on('load',function() {
  $('.loading').hide();
});




$(".deliv").click(function() {
  $('.modal-wrapper').css({'overscroll-behavior-y':'contain'});
  $('.deliv-modal').fadeIn();
});
$('.close-modal , .overlay').click(function(){
  $('.deliv-modal').fadeOut();
});

