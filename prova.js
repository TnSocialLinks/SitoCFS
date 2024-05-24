fetch("https://backendcfs.vercel.app/api/greet")
    .then(response => response.json())
    .then(data => {
        // Aggiungi i dati al testo di un elemento HTML con id "dati"
        document.getElementById("dato").innerText = data.message;
        document.getElementById("dati").innerText = data.response;
    })
    .catch(error => {
        console.error('Errore durante il recupero dei dati dal server locale:', error);
    });