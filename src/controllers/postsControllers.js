import{ getTodosPosts, criarPost} from "../models/postsModels.js";
import fs from"fs"

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();
   // Define uma rota GET para a URL "/posts". Quando essa rota for acessada, a função `getTodosPosts()` será chamada para obter todos os posts do banco de dados.

res.status(200).json(posts);
// Envia uma resposta HTTP com status 200 (OK) e o array de posts no formato JSON para o cliente.
}

export async function postarNovoPost(req,res){
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch(erro) {
        console.log(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}
export async function uploadImagem(req,res){
        const novoPost = {
            descricao: "",
            imgUrl:req.file.originalname,
            alt: ""
        };

        try {
            const postCriado = await criarPost(novoPost);
            const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
            fs.renameSync(req.file.path, imagemAtualizada)
            res.status(200).json(postCriado);
        } catch(erro) {
            console.log(erro.message);
            res.status(500).json({"Erro":"Falha na requisição"});
    }
}

