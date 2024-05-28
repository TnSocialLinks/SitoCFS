function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split('&');
    for (let pair of pairs) {
        const [key, value] = pair.split('=');
        params[key] = decodeURIComponent(value);
    }
    return params;
}

let currentIndex = 0;
const projectsPerPage = 4;

async function fetchProjects(project) {
    const response = await fetch(`https://backendcfs.vercel.app/api/project?project=${project}`);
    if (response.ok) {
        return await response.json();
    } else {
        console.error('Errore nel recupero dei progetti:', response.statusText);
        return [];
    }
}

function createSection(project) {
    

     
    
}

async function loadProjects() {  
    const queryParams = getQueryParams();
    const message = queryParams.message;
    const project = fetchProjects(message);
    createSection(project);
}

// Caricamento iniziale di 4 progetti
loadProjects();