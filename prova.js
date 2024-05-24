document.addEventListener("DOMContentLoaded", function() {
    // URL del tuo endpoint backend
    const url = 'https://backendcfs.vercel.app/api/ultime-offerte'; 

    // Effettua la richiesta GET al backend
    axios.get(url)
        .then(response => {
            // Ottieni i nomi delle cartelle dalla risposta
            const folderNames = response.data.folders;
            
            const offerta1 = document.getElementById('offerta1');
            const offerta2 = document.getElementById('offerta2');
            const offerta3 = document.getElementById('offerta3');

            if (folderNames.length > 0) folder1.textContent = 'Folder 1: ' + folderNames[0];
            if (folderNames.length > 1) folder2.textContent = 'Folder 2: ' + folderNames[1];
            if (folderNames.length > 2) folder3.textContent = 'Folder 3: ' + folderNames[2];





        })
        .catch(error => {
            console.error('Errore nella richiesta:', error);
        });
});