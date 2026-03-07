// Inicializa contador se ainda não existir, usado para a parte da contabilização de pontuação do projeto 

function iniciarJogo() {
    localStorage.setItem("acertos", 0);
    localStorage.setItem("erros", 0);
}

if (localStorage.getItem("acertos") === null) {
    localStorage.setItem("acertos", 0);
}

if (localStorage.getItem("erros") === null) {
    localStorage.setItem("erros", 0);
}

function verificarResposta(resposta) {

    const resultado = document.getElementById("resultado");

    if (resposta === "correta") {

        resultado.innerHTML = "<h2 style='color: green;'>✅ Correta!</h2>";

        let acertos = parseInt(localStorage.getItem("acertos"));
        localStorage.setItem("acertos", acertos + 1);

    } else {

        resultado.innerHTML = "<h2 style='color: red;'>❌ Errada!</h2>";

        let erros = parseInt(localStorage.getItem("erros"));
        localStorage.setItem("erros", erros + 1);
    }

}

// Nesta parte estamos colocando ja a aprte de login onde consta a criação da area de login no site 

function criarConta() {

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "" || senha === "") {
        document.getElementById("mensagemLogin").innerHTML =
            "<p style='color:red;'>Preencha todos os campos!</p>";
        return;
    }

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("senha", senha);

    document.getElementById("mensagemLogin").innerHTML =
        "<p style='color:green;'>Conta criada com sucesso!</p>";
}


function login() {

    const usuarioDigitado = document.getElementById("usuario").value;
    const senhaDigitada = document.getElementById("senha").value;

    const usuarioSalvo = localStorage.getItem("usuario");
    const senhaSalva = localStorage.getItem("senha");

    if (usuarioDigitado === usuarioSalvo && senhaDigitada === senhaSalva) {

        localStorage.setItem("logado", "sim");

        document.getElementById("mensagemLogin").innerHTML =
            "<p style='color:green;'>Login realizado com sucesso!</p>";

    } else {
        document.getElementById("mensagemLogin").innerHTML =
            "<p style='color:red;'>Usuário ou senha incorretos!</p>";
    }
}

// area usada para a validação do login dessa forma pode nos deixar claro de que a pessoa esteja logado de maneira correta, dentro do site mostra que foi aceito para dar inicio ao jogo 

function verificarLogin() {

    const logado = localStorage.getItem("logado");

    if (logado === "sim") {
        iniciarJogo();
        return true;
    } else {
        alert("Você precisa estar logado para jogar!");
        return false;
    }
}