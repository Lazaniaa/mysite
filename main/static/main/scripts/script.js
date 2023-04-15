$(window).scroll(function(){
      if ($(this).scrollTop() > 1000) {
          $('.navbarr').addClass('fixed');
      } else {
          $('.navbarr').removeClass('fixed');
      }
});