const express = require("express");
const cors = require("cors");
const path = require("path");

const conexao = require("./database/conexao");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../forntend/pages")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../forntend/pages/index.html"));
});



app.post("/criarConta", (req,res) =>{

    const {nome, senha} = requestAnimationFrame.body;

    const sql = "INSERT INTO usuario (nome, senha) VALUES (?, ?)";

    conexao.query(sql,[nome,senha], (erro,resultado) => {

        if(erro){
            res.send("ERRO AO CADASTRAR");
            return;
        }
        res.send("CONTA CRIADA COM SUCESSO");

    });
});


app.listen(3000, () => {
    console.log("Servidor rodando  na porta 3000");
});