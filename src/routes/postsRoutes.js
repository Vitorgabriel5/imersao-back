import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsControllers.js";
import cors from "cors";

const corsOption = {
   origin: "http://localhost:8000",
   optionsSuccessStatus: 200
}

// Configura o armazenamento do multer: destino do arquivo e nome do arquivo
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Define o diretório onde os arquivos serão armazenados
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Mantém o nome original do arquivo durante o upload
    }
});

// Cria a instância do multer com as configurações definidas
const upload = multer({ dest: "./uploads", storage });

// Função para definir as rotas da aplicação
const routes = (app) => {
    // Middleware para interpretar o corpo das requisições em JSON
    app.use(express.json());
    app.use(cors(corsOption))
    // Rota para listar todos os posts
    app.get("/posts", listarPosts);

    // Rota para criar um novo post
    app.post("/posts", postarNovoPost);

    // Rota para upload de imagens relacionadas aos posts
    app.post("/upload", upload.single("imagem"), uploadImagem);

    app.put("/upload/:id",atualizarNovoPost);
};

export default routes;