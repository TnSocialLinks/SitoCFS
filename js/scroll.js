$('a[href^="#"]').on('click', function(event) {
    var targetId = this.getAttribute('href');
    var target = $(targetId);
    if (target.length && targetId !== '#') {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 100 // 100 is the additional offset
        }, 1000);
    }
});

$(window).on('scroll', function() {
    var scrollPos = $(document).scrollTop() + 200; // 200 is the additional offset
    $('.nav__list a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr('href'));
        if (refElement.length && refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav__list a').removeClass('active-link');
            currLink.addClass('active-link');
        }
    });
});
