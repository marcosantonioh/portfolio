
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const img = document.getElementById('artPreview');
        img.src = reader.result;
        img.style.display = 'block';
    }
    reader.readAsDataURL(event.target.files[0]);
}

function submitForm() {
    const form = document.getElementById('artForm');
    const formData = new FormData(form);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}










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






