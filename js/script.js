window.addEventListener("load", function () {
  const btn_encriptar = document.getElementById("encriptar");
  const btn_desencriptar = document.getElementById("desencriptar");
  const input_ingreso = document.getElementById("ingreso");
  const parrafo_resultado = document.getElementById("resultado");
  const btn_copiarInput = document.getElementById("copiar");
  const btn_copiar = document.getElementById("p_input");
  const msj_result = document.getElementById("msg_result");
  const h1_result = document.getElementById("h1_result");
  const imagen = this.document.getElementById("image");
  let text_encriptado = "";
  function event_encriptar(event) {
    var texto = input_ingreso.value.toLowerCase();
    for (let i = 0; i < texto.length; i++) {
      switch (texto.charAt(i)) {
        case "a":
          text_encriptado = text_encriptado + "ai";
          break;
        case "e":
          text_encriptado = text_encriptado + "enter";
          break;
        case "i":
          text_encriptado = text_encriptado + "imes";
          break;
        case "o":
          text_encriptado = text_encriptado + "ober";
          break;
        case "u":
          text_encriptado = text_encriptado + "ufat";
          break;

        default:
          text_encriptado = text_encriptado + texto.charAt(i);
          break;
      }
    }

    mostrarEncriptado(text_encriptado);
  }
  function event_desencriptar(event) {
    var texto = input_ingreso.value.toLowerCase();
    for (let i = 0; i < texto.length; i++) {
      switch (texto.charAt(i)) {
        case "a":
          if (texto.substring(i, i + 2) === "ai") {
            text_encriptado = text_encriptado + "a";
            i = i + 1;
          } else {
            text_encriptado = text_encriptado + texto.charAt(i);
          }
          break;
        case "e":
          if (texto.substring(i, i + 5) === "enter") {
            text_encriptado = text_encriptado + "e";
            i = i + 4;
          } else {
            text_encriptado = text_encriptado + texto.charAt(i);
          }
          break;
        case "i":
          if (texto.substring(i, i + 4) === "imes") {
            text_encriptado = text_encriptado + "i";
            i = i + 3;
          } else {
            text_encriptado = text_encriptado + texto.charAt(i);
          }
          break;
        case "o":
          if (texto.substring(i, i + 4) == "ober") {
            text_encriptado = text_encriptado + "o";
            i = i + 3;
          } else {
            text_encriptado = text_encriptado + texto.charAt(i);
          }
          break;
        case "u":
          if (texto.substring(i, i + 4) === "ufat") {
            text_encriptado = text_encriptado + "u";
            i = i + 3;
          } else {
            text_encriptado = text_encriptado + texto.charAt(i);
          }
          break;

        default:
          text_encriptado = text_encriptado + texto.charAt(i);
          break;
      }
    }
    mostrarEncriptado(text_encriptado);
  }
  function mostrarEncriptado(texto) {
    btn_copiar.classList.remove("hide");
    btn_copiar.classList.add("copiar");
    btn_copiarInput.classList.remove("hide");
    msj_result.classList.remove("resultado");
    msj_result.classList.add("hide");
    h1_result.classList.add("hide");
    imagen.classList.remove("image");
    imagen.classList.add("hide");

    console.log(texto);
    parrafo_resultado.innerHTML = texto;
    text_encriptado = "";
  }
  btn_encriptar.addEventListener("click", event_encriptar);
  btn_desencriptar.addEventListener("click", event_desencriptar);
  function copiarTexto() {   

    let areaTexto = document.createElement('textarea');
    areaTexto.value = parrafo_resultado.innerText;
    areaTexto.setAttribute('readonly', '');
    areaTexto.style.position = 'absolute';
    areaTexto.style.left = '-9999px';

    document.body.appendChild(areaTexto);

    let seleccionado = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;

    areaTexto.select();

    document.execCommand('copy');

    document.body.removeChild(areaTexto);

    if (seleccionado) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(seleccionado);
    }
  }
  btn_copiar.addEventListener("click",copiarTexto);
});
