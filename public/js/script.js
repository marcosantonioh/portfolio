
window.onload = function() {
    const projectGrid = document.querySelector('.project-grid');

    // Recupera as artes do localStorage
    let arts = JSON.parse(localStorage.getItem('arts')) || [];

    // Itera sobre as artes e adiciona à página
    arts.forEach(art => {
        const newProjectItem = document.createElement('div');
        newProjectItem.classList.add('project-item');

        const imgElement = document.createElement('img');
        imgElement.src = art.image;
        imgElement.alt = art.title;

        const titleElement = document.createElement('h3');
        titleElement.textContent = art.title;

        newProjectItem.appendChild(imgElement);
        newProjectItem.appendChild(titleElement);

        projectGrid.appendChild(newProjectItem);
    });
}




// Função para mostrar/ocultar o formulário de upload
function toggleUploadForm() {
    var uploadArtSection = document.getElementById('upload-art');
    if (uploadArtSection.style.display === 'none' || uploadArtSection.style.display === '') {
        uploadArtSection.style.display = 'block';
    } else {
        uploadArtSection.style.display = 'none';
    }
}

// Adiciona o evento de clique ao botão para abrir o formulário
document.querySelector('.btn_newArt button').addEventListener('click', toggleUploadForm);

