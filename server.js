const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

// Configuração do multer para upload de arquivos
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public')); // Servir arquivos estáticos da pasta 'public'

app.post('/upload', upload.single('artImage'), (req, res) => {
    console.log(req.file); // Log do arquivo recebido
    res.send('Arquivo enviado com sucesso!');
});

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});