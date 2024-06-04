document.addEventListener("DOMContentLoaded", function () {
    // URL del tuo endpoint backend
    const url = 'https://backendcfs.vercel.app/api/ultime-offerte';

    // Oggetto per memorizzare i messaggi per ciascun link
    const linkMessages = {};

    // Funzione per gestire il click
    function handleClick(event) {
        event.preventDefault(); // Previene il comportamento predefinito del link
        const linkId = event.target.closest('a').id;
        const message = linkMessages[linkId];
        if (message) {
            // Apri una nuova finestra con il messaggio come query parameter
            window.open(`pagina2.html?message=${encodeURIComponent(message)}`, '_blank');
        } else {
            console.error('Nessun messaggio trovato per il link:', linkId);
        }
    }

    // Effettua la richiesta GET al backend
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Ottieni i nomi delle cartelle e gli URL delle immagini dalla risposta
            const folders = data.folders;
            const offerta1 = document.getElementById('offerta1');
            const offerta2 = document.getElementById('offerta2');
            const offerta3 = document.getElementById('offerta3');

            // Assegna le immagini ai tag <img> esistenti e imposta i messaggi
            if (folders.length > 0) {
                document.getElementById('img1').src = folders[0].imageUrl;
                offerta1.textContent = folders[0].name;
                linkMessages['progetto1'] = folders[0].name;
                document.getElementById('progetto1').addEventListener('click', handleClick);
            }
            if (folders.length > 1) {
                document.getElementById('img2').src = folders[1].imageUrl;
                offerta2.textContent = folders[1].name;
                linkMessages['progetto2'] = folders[1].name;
                document.getElementById('progetto2').addEventListener('click', handleClick);
            }
            if (folders.length > 2) {
                document.getElementById('img3').src = folders[2].imageUrl;
                offerta3.textContent = folders[2].name;
                linkMessages['progetto3'] = folders[2].name;
                document.getElementById('progetto3').addEventListener('click', handleClick);
            }
        })
        .catch(error => {
            console.error('Errore nella richiesta:', error);
        });
});

