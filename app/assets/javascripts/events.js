$(document).on('turbolinks:load', function(){
  if (window.location.pathname == "/my-work") {

    $('.kickball-btn').click(function(){
      $('html, body').animate({
        scrollTop: $("#kickball-group").offset().top
      }, 1250);
    });
    
    $('.judo-btn').click(function(){
      $('html, body').animate({
        scrollTop: $("#judo-group").offset().top
      }, 1250);
    });

    $('.bbq-btn').click(function(){
      $('html, body').animate({
        scrollTop: $("#bbq-group").offset().top
      }, 1250);
    });
    
    $('.mvrc-btn').click(function(){
      $('html, body').animate({
        scrollTop: $("#mvrc-group").offset().top
      }, 1250);
    });
    
    $('.freedomfest-btn').click(function(){
      $('html, body').animate({
        scrollTop: $("#freedomfest-group").offset().top
      }, 1250);
    });
    
  } else {
    $('.my-dropdown').hide();
    $('li').removeClass("work");
  }
});