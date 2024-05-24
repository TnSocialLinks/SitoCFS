document.addEventListener("DOMContentLoaded", function() {
    // URL del tuo endpoint backend
    const url = 'https://backendcfs.vercel.app/api/ultime-offerte'; 

    // Effettua la richiesta GET al backend
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Ottieni i nomi delle cartelle dalla risposta
            const folderNames = data.folders;
            
            const offerta1 = document.getElementById('offerta1');
            const offerta2 = document.getElementById('offerta2');
            const offerta3 = document.getElementById('offerta3');

            if (folderNames.length > 0) offerta1.textContent = folderNames[0];
            if (folderNames.length > 1) offerta2.textContent = folderNames[1];
            if (folderNames.length > 2) offerta3.textContent = folderNames[2];





        })
        .catch(error => {
            console.error('Errore nella richiesta:', error);
        });
});