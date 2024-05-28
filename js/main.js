/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

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