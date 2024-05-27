
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
showMenu("nav-toggle","nav-menu")

const showFiltro = (filtroId) => {
    const filtro = document.getElementById(filtroId)
    if(filtro){
        filtro.addEventListener('click', () =>{
        })
    }
}
showFiltro("filtro")

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


