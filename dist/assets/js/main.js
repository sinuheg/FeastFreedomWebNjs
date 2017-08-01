$(function(){

  "use strict";  

  //////scroll function for changed css starts
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      jQuery(".wrapper>header").addClass("scrolled");
    } else {
      jQuery(".wrapper>header").removeClass("scrolled");
    }
    if ($(this).scrollTop() > 600) {
      jQuery("footer").css({"z-index": "1"});
    } else {
      jQuery("footer").css({"z-index": "0"});
    }
  });

  //////show loader image on loading starts
  $(".se-pre-con").fadeOut("slow"); 
     
  ///////menu toggle starts
  $("a,div,button, span").on('click',function(e){

    if ( $(this).hasClass("navbar-toggle") ) {

      $(".collapse").slideToggle("500");

    }else if ( $(this).hasClass("radio-btn") ) {

      $('.radio-btn').removeClass('checked');
      var obj = $(this);
      var thisInput = obj.find('.radio-class');
      thisInput.prop("checked", true);
      obj.addClass("checked");

    }else if ( $(this).is("#myTabs") ) {

      e.preventDefault()
      $(this).tab('show')
    }else if ( $(this).is("#but_prev") ) {

      carousel.prev();
    }else if ( $(this).is("#but_pause") ) {

      carousel.pause();
    }else if ( $(this).is("#but_start") ) {

      carousel.start();
    }else if ( $(this).is("#but_next") ) {

      carousel.next();
    }else if ( $(this).is("#play-btn") ) {

      var video = document.getElementById('bg-video');
      var $video = $('#bg-video');
      var $control = $('#play-btn');
      if(video.paused == true){
        video.play();
        $('.video-bg').hide();
        $control.parents('.video-controls').fadeTo(500, 0).css({'z-index':0}).addClass('hidden');
        $video.parents('.video-wrap').addClass('hide-bg-overlay');
      } else {
        video.pause();
        $control.parents('.video-controls').fadeTo(10, 1).css({'z-index':1}).removeClass('hidden');
        $video.parents('.video-wrap').removeClass('hide-bg-overlay');
      }
      e.preventDefault();




    }else if ( $(this).is("#bg-video") ) {

      var $video = $('#bg-video');
      var $control = $('#play-btn');
      if(video.paused == false){
        $control.parents('.video-controls').fadeTo(10, 1).css({'z-index':1}).removeClass('hidden');
        video.pause();
        $video.parents('.video-wrap').removeClass('hide-bg-overlay');
      } else {
        $control.parents('.video-controls').fadeTo(500, 0).css({'z-index':0}).addClass('hidden');
        video.play();
        $video.parents('.video-wrap').addClass('hide-bg-overlay');
      }
    }else if( $(this).is('.altera')){
       // Increases or decreases the value being 0 as low as possible
      var inputScope =  $(this).parent('td').find (".txtacrescimo");
      if ($(this).hasClass('acrescimo'))
         inputScope.val(parseInt(inputScope.val())+1);
      else if (inputScope.val()>=1)
          inputScope.val(parseInt(inputScope.val())-1);
    }
  });
 
  //remove class if browser is IE starts
  var ms_ie = false;
  var ua = window.navigator.userAgent;
  var old_ie = ua.search('MSIE ');
  var new_ie = ua.search('Trident/');

  if ((old_ie > -1) || (new_ie > -1)) {
    ms_ie = true;
  }

  if ( ms_ie ) {
    $('body *').removeClass('hvr-wobble-horizontal');
    $('body *').removeClass('hvr-wobble-vertical');
  }

  //remove class if browser is IE ends
  if(navigator.appVersion.indexOf("MSIE 9.") != -1){
    $("html").addClass("ie9");
  } else if(navigator.appVersion.indexOf("MSIE 8.") == 8){
    $("html").addClass("ie8");
  }

  $(".sidebar-widget li").addClass("wow fadeInRight");

  // Element cache to avoid constant search cycles by the same
  var $input = $('.txtacrescimo');

  // Set 0 to start
  $input.val(1); 

});

//accordion
$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.detail').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('.acdn'), false);
});