$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

/** 
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 1000, function(){
                window.location.hash = hash;
            });
          } 
        });
      });      

    
      $(function(){
        $("a").click(function(event) {
          if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
              scrollTop: $(hash).offset().top
              }, 800, function(){
                window.location.hash = hash;
      });
      } 
      });
      });  


$(function(){
    $('a[href*=\\#]:not([href=\\#])').on(click,
        function(){ 
        var target = $(this.hash);
        target = target.lenght?target : $('[name=' + this.hash.substr(1) +']');
        if(target.length){
            $('html,body').animate({
                scrolltop: target.offset().scrolltop
            },1000);
            return false;

            }
        });
    });
***/