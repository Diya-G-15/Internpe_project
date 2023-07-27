$(document).ready(function () {
    $('.hamburger_menu').click(function () {
        $('.navbar_nav_items').toggle();
    });

    $('.navbar_nav_items a').click(function () {
        $('.navbar_nav_items').hide();
    });

    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        const target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});
