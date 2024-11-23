    import express from "express";
    import routes from "./src/routes/postsRoutes.js";
    // Importa o framework Express, que é a base para criarmos nossa aplicação web.

    const app = express();
    // Cria uma instância do Express, que será o nosso servidor web.
    app.use(express.static("uploads"));
    routes(app);


    app.listen(3000, () => {
    console.log("Servidor escutando...");
    });
// Inicia o servidor, escutando na porta 3000. Quando o servidor estiver pronto, a mensagem "Servidor escutando..." será exibida no console.