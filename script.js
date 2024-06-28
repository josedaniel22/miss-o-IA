const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "cachaça faz bem pra saúde ?",
        alternativas: [
            "faz bem sim",
            "faz com certeza"
        ]
    },
    {
        enunciado: "pinga de alanbique faz bem ora saúde ?",
        alternativas: [
            "faz bem sim",
            "faz com certeza"
        ]
    },
    
    {
        enunciado: "velho barreiro faz bem pra saúde ?",
        alternativas: [
            "faz bem sim",
            "faz com certeza"
        ]
    },
    {
        enunciado: "campari faz bem pra saúde ? ",
        alternativas: [
            "faz bem sim",
            "faz com certeza"
        ]
    },
    {
        enunciado: "cerveja faz bem pra saúde ?",
        alternativas: [
            "faz bem sim",
            "faz com certeza"
        ]
    },
    
]; 
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
