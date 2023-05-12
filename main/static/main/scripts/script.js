AOS.init({
  once: true,
  disable: function() {
    var maxWidth = 1500;
    return window.innerWidth < maxWidth;
  }

});


function backToTop()
{
    let button = $('.link-top');
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 500)
        {
            button.fadeIn();
        }else{
            button.fadeOut();
        }
    });

}
backToTop();