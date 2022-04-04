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



