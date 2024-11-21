import conectarAoBanco from "../config/dbconfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Cria uma conexão com o banco de dados, utilizando a string de conexão obtida da variável de ambiente `STRING_CONEXAO`. O resultado da conexão é armazenado na variável `conexao`.

export async function getTodosPosts(){
    const db = conexao.db("imersao-back-end");
    // Obtém o banco de dados com o nome "imersao-back-end" a partir da conexão estabelecida.
    
    const colecao = db.collection("posts");
    // Obtém a coleção "posts" dentro do banco de dados.
    
    return colecao.find().toArray();
    // Executa uma consulta para encontrar todos os documentos (posts) na coleção e retorna um array com os resultados.
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersao-back-end");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost)
    
}