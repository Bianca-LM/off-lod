var $animation_elements = $('.slide');
    var $window = $(window);
    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);
      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) $element.addClass('hasSlid');
        else $element.removeClass('hasSlid');
      });
    }
    $window.on('scroll resize', check_if_in_view);


    $(".step").click( function() {
      $(this).addClass("active").prevAll().addClass("active");
      $(this).nextAll().removeClass("active");
    });
    
    $(".step01").click( function() {
      $("#line-progress").css("width", "3%");
      $(".discovery").addClass("active").siblings().removeClass("active");
    });
    
    $(".step02").click( function() {
      $("#line-progress").css("width", "25%");
      $(".strategy").addClass("active").siblings().removeClass("active");
    });
    
    $(".step03").click( function() {
      $("#line-progress").css("width", "50%");
      $(".creative").addClass("active").siblings().removeClass("active");
    });
    
    $(".step04").click( function() {
      $("#line-progress").css("width", "75%");
      $(".production").addClass("active").siblings().removeClass("active");
    });
    
    $(".step05").click( function() {
      $("#line-progress").css("width", "100%");
      $(".analysis").addClass("active").siblings().removeClass("active");
    });
    
    $("#color").click( function() {
      $("body").toggleClass("blue")
    });



jQuery(function($){
	$('.js-typewriter').typewrite({
		speed: 35,
		// fadeIn: false
	});
});



jQuery.fn.extend({
    typewrite: function(userArgs){

        var me = this;
        var args = {
            speed: 60,
            callback: false,
            fadeIn: true
        };
        if(typeof userArgs == 'number')
            args.speed = userArgs;
        else {
            args = jQuery.extend(args,userArgs);
        }


        var msg = me.text();
        if( ! msg )
            return false;

        // stop bump
        me.css('position','relative');
        me.html('<span style="z-index:0;opacity:0;">'+msg+'</span>');
        me.css('visibility','visible');
        me.prepend('<span style="z-index:50;position:absolute;" id="typewriter-text"></span>');
        $tt = jQuery('#typewriter-text');

        msg = msg.split('');
        var letter;
        
        var typewriterInterval = window.setInterval(function(){
            if(msg.length) {
                letter = msg.shift();
                
                if(! args.fadeIn) {
                    $tt.append(letter);
                    return;
                }

                letter = '<span class="typewriter-fade-letter" style="display: none;">' + letter + '</span>';
                $tt.append(letter);
                $tt.find('.typewriter-fade-letter').last().fadeIn(300);
            } else {
                window.clearInterval(typewriterInterval);
                if(typeof args.callback == 'function')
                    args.callback();
            }
        },args.speed);
    }
});
