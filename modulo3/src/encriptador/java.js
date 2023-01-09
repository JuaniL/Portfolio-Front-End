function encriptar() {
    var texto = document.getElementById("input__dos").value.toLowerCase();
    var textoCifrado = texto.replace(/e/igm,"enter");
    var textoCifrado = textoCifrado.replace(/o/igm,"over");
    var textoCifrado = textoCifrado.replace(/i/igm,"imes");
    var textoCifrado = textoCifrado.replace(/a/igm,"ai");
    var textoCifrado = textoCifrado.replace(/u/igm,"ufat");

    document.getElementById("imagen__derecha").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"
}
function desencriptar() {
    var texto = document.getElementById("input__dos").value.toLowerCase();
    var textoCifrado = texto.replace(/enter/igm,"e");
    var textoCifrado = textoCifrado.replace(/over/igm,"o");
    var textoCifrado = textoCifrado.replace(/imes/igm,"i");
    var textoCifrado = textoCifrado.replace(/ai/igm,"a");
    var textoCifrado = textoCifrado.replace(/ufat/igm,"u");

    document.getElementById("imagen__derecha").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit"
}
function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
}
