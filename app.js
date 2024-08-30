const express = require('express');
const multer = require('multer');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const port = 3000;

// Configuração do Multer para upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Configuração do PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'arts',
    password: '12345',
    port: 5432,
});

// Middleware para servir arquivos estáticos
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Página de Upload
app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, 'upload.html'));
});

// Rota para lidar com o upload
app.post('/upload', upload.single('artImage'), async (req, res) => {
    const { artTitle } = req.body;
    const imagePath = req.file.path;

    try {
        const result = await pool.query(
            'INSERT INTO images (title, image_path) VALUES ($1, $2) RETURNING *',
            [artTitle, imagePath]
        );
        res.send('Imagem publicada com sucesso!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao publicar a imagem.');
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
