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
  
  if (window.location.pathname == "/freedomfest") {
    
    $('#the-activity').load(function(){
      var height = $('#the-activity').css('height')
      var width = $('#the-activity').css('width')
      $('#the-event').css('height', height)
      $('#the-event').css('width', width)
    });
    
    $(window).resize(function(){
      var height = $('#the-activity').css('height')
      var width = $('#the-activity').css('width')
      $('#the-event').css('height', height)
      $('#the-event').css('width', width)
    });
  }
  
  if (window.location.pathname == "/judo-competition" && $(".col-narrow").css("width") == "12.5%") {
    
    $('#judo-me').load(function(){
      var height = $('#judo-me').css('height')
      $('#judo-group').css('height', height)
    });
    
    $(window).resize(function(){
      var height = $('#judo-me').css('height')
      $('#judo-group').css('height', height)
    });
  }
  
});