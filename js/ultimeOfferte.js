document.addEventListener("DOMContentLoaded", function() {
    // URL del tuo endpoint backend
    const url = 'https://backendcfs.vercel.app/api/ultime-offerte';

    // Effettua la richiesta GET al backend
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Ottieni i nomi delle cartelle e gli URL delle immagini dalla risposta
            const folders = data.folders;
            const offerta1 = document.getElementById('offerta1');
            const offerta2 = document.getElementById('offerta2');
            const offerta3 = document.getElementById('offerta3');
            // Assegna le immagini ai tag <img> esistenti
            if (folders.length > 0) {
                document.getElementById('img1').src = folders[0].imageUrl;
                offerta1.textContent = folders[0].name;
            }
            if (folders.length > 1) {
                document.getElementById('img2').src = folders[1].imageUrl;
                offerta2.textContent = folders[1].name;
            }
            if (folders.length > 2) {
                document.getElementById('img3').src = folders[2].imageUrl;
                offerta3.textContent = folders[2].name;
            }
        })
        .catch(error => {
            console.error('Errore nella richiesta:', error);
        });
});
