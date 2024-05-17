let slideIndex = 0;
let images = ["img/1.jpg", "img/2.jpg", "img/3.jpg"]; // Array degli src delle immagini

// Funzione per mostrare la slide corrente
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    let imgElement = slides[slideIndex-1].getElementsByTagName("img")[0];
    imgElement.src = images[slideIndex-1];
}

// Funzione per cambiare slide manualmente
function plusSlides(n) {
    let slides = document.getElementsByClassName("slide");
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    let imgElement = slides[slideIndex-1].getElementsByTagName("img")[0];
    imgElement.src = images[slideIndex-1];
}

// Avvio della slideshow automatica
function startSlideshow() {
    showSlides();
    setInterval(showSlides, 4000); // Cambia immagine ogni 4 secondi
}

// Event listeners per i pulsanti
document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next').addEventListener('click', () => plusSlides(1));

// Avvia la slideshow
startSlideshow();
