document.addEventListener("DOMContentLoaded", function() {
    // URL del tuo endpoint backend
    const url = 'https://backendcfs.vercel.app/api/ultime-offerte';

    // Effettua la richiesta GET al backend
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Ottieni i nomi delle cartelle e le immagini dalla risposta
            const folders = data.folders;

            const offerta1 = document.getElementById('offerta1');
            const offerta2 = document.getElementById('offerta2');
            const offerta3 = document.getElementById('offerta3');

            // Assegna le immagini ai tag <img> esistenti
            if (folders.length > 0) {            
                document.getElementById('img1').src = getImagePath(folders[0].name, folders[0].significantImage);
                offerta1.textContent = folderNames[0];
            }
            if (folders.length > 1) {
                document.getElementById('img2').src = getImagePath(folders[1].name, folders[1].significantImage);
                offerta2.textContent = folderNames[1];
            }
            if (folders.length > 2) {
                document.getElementById('img3').src = getImagePath(folders[2].name, folders[2].significantImage);
                offerta3.textContent = folderNames[2];
            }
        })
        .catch(error => {
            console.error('Errore nella richiesta:', error);
        });
});

// Funzione per ottenere il percorso completo dell'immagine
function getImagePath(folderName, imageName) {
    return `https://backendcfs.vercel.app/progetti/${folderName}/${imageName}`;
}

