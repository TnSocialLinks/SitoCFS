fetch("https://backendcfs.vercel.app/api/users")
    .then(response => response.text())
    .then(data => {
        console.log('Dati ricevuti dal server locale:', data);
    })
    .catch(error => {
        console.error('Errore durante il recupero dei dati dal server locale:', error);
    });