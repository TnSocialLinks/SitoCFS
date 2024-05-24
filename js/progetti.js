
//cose...

document.addEventListener("DOMContentLoaded", function() {
    // Trova tutti gli elementi con la classe "contenitore-pulsante"
    var contenitori = document.querySelectorAll(".progetto-itemGrid");

    // Itera attraverso tutti gli elementi trovati
    contenitori.forEach(function(contenitore) {
        // Crea un nuovo elemento <button>
        var button = document.createElement("button");
        // Aggiungi la classe "btn" al pulsante
        button.classList.add("progetto-pulsante");

        // Aggiungi il pulsante al contenitore
        contenitore.appendChild(button);
    });
});
/*
<div class="bd-container">
                <div class="progetto-container progetto-layoutUno">
                    <div class="progetto-itemGrid">
                        <img src="img/MontagneBelle.jpg">
                        <div class="progetto-titoloProgetto">Titolo Progetto</div>
                    </div>
                    <div class="progetto-itemGrid">
                        <img src="img/MontagneBelle.jpg">
                        <div class="progetto-titoloProgetto">Titolo Progetto Titolo Progetto Titolo Progetto</div>
                    </div>
                </div>
            </div>
*/
function apriLista(){
    const sezione = document.getElementByClassName("main-progetti")
    
}

