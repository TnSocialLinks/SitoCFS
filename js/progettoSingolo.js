// Funzione per ottenere il parametro di query dalla URL
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}


// Ottieni il messaggio dalla URL e mostrala
const message = getQueryParameter('message');



async function fetchProject(project) {
    const response = await fetch(`https://backendcfs.vercel.app/api/project?project=${project}`);
    if (response.ok) {
        return await response.json();
    } else {
        console.error('Errore nel recupero dei progetti:', response.statusText);
        return [];
    }
}


function scriviPagina(project) {

}


if (message) {
    const project = await fetchProject(message);
    scriviPagina(project);
} else {
    console.log("Errore nel caricamento del progetto", error);
}



