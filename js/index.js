const entrada = document.querySelector("#entrada");
const salida = document.querySelector("#salida");

const btnEnc = document.querySelector("#encriptar");
const btnDes = document.querySelector("#desencriptar");
const btnCopy = document.querySelector("#copiar");

btnEnc.onclick = encriptar;
btnDes.onclick = desencriptar;
btnCopy.onclick = copyText;

function encriptar() {
  var cadena = entrada.value;
  var outPut = cadena
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  salida.value = outPut;
}

function desencriptar() {
  var cadena = entrada.value;
  var outPut = cadena
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  salida.value = outPut;
}

function copyText() {
  salida.select();
  navigator.clipboard
    .writeText(salida.value)
    .then(() => {
      alert("El texto ha sido copiado al portapapeles");
    })
    .catch((err) => {
      alert("Error al copiar el texto: ", err);
    });
}
