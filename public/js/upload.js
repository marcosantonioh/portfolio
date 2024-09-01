
function previewImage(event){

    var reader = new FileReader();
    var imageField = document.getElementById("artPreview");

    reader.onload = function() {
        if (reader.readyState === 2) {
            imageField.src = reader.result;
            imageField.style.display = "block";  // Exibe a imagem
        }
    };

    reader.readAsDataURL(event.target.files[0]);  // Lê o conteúdo do arquivo

}




function submitForm() {
    const form = document.getElementById('artForm');
    const formData = new FormData(form);

    // Desabilitar o botão de submissão
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "Publicando...";

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Redireciona para uma página de sucesso
        window.location.href = './success.html';
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao publicar a arte. Por favor, tente novamente.');
    })
    .finally(() => {
        // Reabilitar o botão de submissão
        submitButton.disabled = false;
        submitButton.textContent = "Publicar Arte";
    });
}

