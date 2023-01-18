texto = document.getElementById("texto-a-encriptar").value;
textoEncriptado = texto;
img = document.getElementById("imagen-sin-texto");

document.getElementById("encriptar").onclick = encriptar;
document.getElementById("desencriptar").onclick = desencriptar;
document.getElementById("copiar").onclick = copiar;

//Funcion Encriptar

function encriptar() {
  recorrido();
}

function recorrido() {
  texto = document.getElementById("texto-a-encriptar").value;

  textoEncriptado = texto;
  textoEncriptado = textoEncriptado.replaceAll("e", "enter");
  textoEncriptado = textoEncriptado.replaceAll("i", "imes");
  textoEncriptado = textoEncriptado.replaceAll("o", "ober");
  textoEncriptado = textoEncriptado.replaceAll("u", "ufat");
  textoEncriptado = textoEncriptado.replaceAll("a", "ai");
}

//Funcion Desencriptar

function desencriptar() {
    if (document.getElementById("texto-a-encriptar").value == "") {
      document.getElementById("div-imagen").style.background = "#DED9E2";
      document.getElementById("div-imagen").innerHTML =
        "Ingrese su texto a encriptar...";
    } else {
      textoDesencriptado = document.getElementById("texto-a-encriptar").value;
      textoDesencriptado = textoDesencriptado.replaceAll("enter", "e");
      textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
      textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
      textoDesencriptado = textoDesencriptado.replaceAll("ufat", "u");
      textoDesencriptado = textoDesencriptado.replaceAll("ai", "a");
  
      img.style.display = "none";
      document.getElementById("div-imagen").innerHTML = textoDesencriptado;
      document.getElementById("div-imagen").style.background = "#DED9E2";
    } 
}

//Funcion de copiado

function copiar() {
    let textoACopiar = document.getElementById("div-imagen");
    textoACopiar.select();
    navigator.clipboard.writeText(textoACopiar.innerHTML);
    alert('Se ha copiado: "' + textoACopiar.innerHTML + " ");
  }