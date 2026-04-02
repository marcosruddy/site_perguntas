const express = require("express");
const cors = require("cors");
const path = require("path");

const conexao = require("./database/conexao");

const app = express();

const open = (...args) => import('open').then(mod => mod.default(...args));

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../forntend/pages")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../forntend/pages/index.html"));
});



app.post("/criarConta", (req,res) =>{

    const {nome, senha} = req.body;

    const sql = "INSERT INTO usuario (nome, senha) VALUES (?, ?)";

    conexao.query(sql,[nome,senha], (erro,resultado) => {

       if (erro) {
            console.log(erro);
            res.send("ERRO AO CADASTRAR");
            return;
        }

        res.send("CONTA CRIADA COM SUCESSO");

    });
});

app.post("/login", (req, res) => {
    const {nome, senha} =  req.body;

    const sql = "SELECT * FROM usuario WHERE nome = ? AND senha = ?";

    conexao.query(sql, [nome, senha], (erro, resultado) => {

        if (erro) {
            console.log(erro);
            res.send("ERRO");
            return;
        }
        if (resultado.length > 0){
            res.send("LOGIN_OK");
        } else  {
            res.send("LOGIN_ERRO");
        }
    });
});


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
   

    open("http://localhost:3000");
});