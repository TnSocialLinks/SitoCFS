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

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
function scrollActive(){
    const scrollY = window.scrollY;
    const navbarHeight = document.getElementById('header').offsetHeight; // Ottieni l'altezza della navbar

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - ((current.getAttribute('id') === 'chiSiamo') ? 0 : navbarHeight); // Sottrai l'altezza della navbar
        sectionId = current.getAttribute('id')

        let navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']'); // Ottieni il link corrispondente

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            if(navLink) navLink.classList.add('active-link'); // Aggiungi la classe solo se il link esiste
        }else{
            if(navLink) navLink.classList.remove('active-link'); // Rimuovi la classe solo se il link esiste
        }
    })
}
window.addEventListener('scroll', scrollActive)



/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal('.chiSiamo-container', {
    interval: 200
})
