AOS.init({
  once: true,


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