const inputTexto1 = document.querySelector(".input-texto-area1");
const mensagem = document.querySelector(".container-input-texto-area2");


function botaoEncriptar(){
    const textEncriptado = encriptar(inputTexto1.value);
    console.log("Teste do botão")
}

/* As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat" */

function botaoDesncriptar(){

}