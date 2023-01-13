const inputTexto1 = document.querySelector(".input-texto-area1");
const mensagem = document.querySelector(".input-texto-area2");


function botaoEncriptar(){
    const textoEncriptado = encriptar(inputTexto1.value);
    mensagem.value = textoEncriptado
    console.log("Teste do botão");
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    console.table(matrizCodigo);
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i= 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function botaoDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto1.value);
    mensagem.value = textoDesencriptado;
    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    console.table(matrizCodigo);
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i= 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][1])
        }
    }
    return stringDesencriptada;
}