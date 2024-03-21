
function criptografarTexto(texto) {
    
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}


function descriptografarTexto(texto) {
    
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}


function processarAcao() {
    
    var texto = document.getElementById("texto").value;

    
    var acao = document.getElementById("acao").value;
    
    
    if (acao === "criptografar") {
        
        var textoCriptografado = criptografarTexto(texto);
        
        document.getElementById("resultado").value = textoCriptografado;
    } else if (acao === "descriptografar") {
        
        var textoDescriptografado = descriptografarTexto(texto);
        
        document.getElementById("resultado").value = textoDescriptografado;
    }
}


function copiarTexto() {
    
    var resultado = document.getElementById("resultado");
    
    resultado.select();
    
    document.execCommand("copy");
}


document.getElementById("criptografar").addEventListener("click", processarAcao);


document.getElementById("copiar").addEventListener("click", copiarTexto);
