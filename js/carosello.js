let slideIndex = 0;

function showSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');

    // Nascondiamo tutte le slide
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Rimuoviamo la classe 'active' da tutti gli indicatori
    indicators.forEach(dot => {
        dot.classList.remove('active');
    });

    // Incrementiamo slideIndex e assicuriamoci che rimanga all'interno dei limiti
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Mostriamo la slide corrente e aggiungiamo la classe 'active' al suo indicatore corrispondente
    slides[slideIndex - 1].style.display = 'block';
    indicators[slideIndex - 1].classList.add('active');

    // Richiamiamo la funzione showSlide dopo 10 secondi
    setTimeout(showSlide, 3000);
}

// Avviamo il carosello
showSlide();

  
  