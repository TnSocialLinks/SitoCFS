let currentIndex = 0;
const projectsPerPage = 4;

async function fetchProjects(startIndex, count) {
    const response = await fetch(`https://backendcfs.vercel.app/api/projects?project=${project}&count=${count}`);
    if (response.ok) {
        return await response.json();
    } else {
        console.error('Errore nel recupero dei progetti:', response.statusText);
        return [];
    }
}

function createSection(project1, project2, template, index) {

    if (project2 === null) {

        template = sectionTemplateSingolo;
        let sectionHTML = template.replace('IMG_SRC_1', project1.imageUrl)
            .replace('PROGETTO_TITOLO_1', project1.title)
            .replace('ID_1', index * 2)

        const div = document.createElement('div');
        div.innerHTML = sectionHTML;

        const pulsanti = div.querySelectorAll('.progetto-pulsante');
        pulsanti.forEach((pulsante, i) => {
            const idPulsante = project1.title;
            pulsante.setAttribute('id', idPulsante);
            pulsante.addEventListener('click', function () {
                const message = `Messaggio mandato da ${idPulsante}`;
                const url = `pagina2.html?message=${encodeURIComponent(message)}`;
                window.location.href = url;
            });
        });


        return div;

    } else {
        let sectionHTML = template.replace('IMG_SRC_1', project1.imageUrl)
            .replace('PROGETTO_TITOLO_1', project1.title)
            .replace('IMG_SRC_2', project2 ? project2.imageUrl : 'https://via.placeholder.com/150')
            .replace('PROGETTO_TITOLO_2', project2 ? project2.title : 'Titolo non disponibile')
            .replace('ID_1', index * 2)
            .replace('ID_2', index * 2 + 1);

        const div = document.createElement('div');
        div.innerHTML = sectionHTML;

        const pulsanti = div.querySelectorAll('.progetto-pulsante');
        pulsanti.forEach((pulsante, i) => {
            const idPulsante = (i === 0) ? project1.title:project2.title;
            pulsante.setAttribute('id', idPulsante);
            pulsante.addEventListener('click', function () {
                const message = `Messaggio mandato da ${idPulsante}`;
                const url = `pagina2.html?message=${encodeURIComponent(message)}`;
                window.location.href = url;
            });
        });


        return div;

    }





}

async function loadProjects() {
    console.log('Caricamento progetti...');
    const projects = await fetchProjects(currentIndex, projectsPerPage);
    console.log('Progetti caricati:', projects);
    const container = document.getElementById('main-progetti');

    if (projects.length < 4) {
        document.getElementById('load-more').style.visibility = 'hidden';
    }



    for (let i = 0; i < projects.length; i += 2) {
        const project1 = projects[i];
        const project2 = i + 1 < projects.length ? projects[i + 1] : null;
        const template = (i / 2) % 2 === 0 ? sectionTemplateUno : sectionTemplateDue;
        const section = createSection(project1, project2, template, i / 2);
        container.appendChild(section);
    }

    currentIndex += projects.length;
}

// Caricamento iniziale di 4 progetti
loadProjects();