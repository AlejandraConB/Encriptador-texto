// Configuración de eventos para los botones
const areaTexto= document.querySelector(".area-texto"); //textArea
const mensaje = document.querySelector(".mensaje");
const botonCopiar = document.querySelector('.bott-copiar');

    // Función para validar el texto ingresado
    function validarTexto(texto) {
        const caracteresIngresados = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
        const letrasMayusculas = /[A-Z]/g;
        const vacio = "";

        if (texto.match(letrasMayusculas) || texto.match(caracteresIngresados)) {
          alert("Texto inválido, ingrese solo letras minúsculas");
          return false;
        } else if (texto === vacio) {
          alert("Ingrese texto para encriptar o desencriptar");
          return false;
        }
        return true;
      }

//Botón Encriptar
function botonEncriptar(){
    const textoEncriptado = encriptar(areaTexto.value);
    mensaje.value = textoEncriptado;
    areaTexto.value = ""; //Evaluar si lo agrego
    mensaje.style.backgroundImage = "none"; //Evaluar si lo agrego
}

// Función para encriptar el texto
  function encriptar (infoEncriptar) {
    // Definimos las reglas de encriptación y desencriptación
    const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};
    infoEncriptar = infoEncriptar.toLowerCase()

      for (let i = 0; i < reglas.length; i++) {
        if(infoEncriptar.includes(reglas)){
            infoEncriptar = stringEncriptar.replaceAll(reglas)
      }
      return infoEncriptar;
  }

    //Botón desncriptar
  function botonDescriptar(){
    const = textoEncriptado = desencriptar(areaTexto.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    botonCopiar.style.display = "block";
  }

  // Función para desencriptar el texto
  function descriptar(infoDescriptar) {
    // Definimos las reglas de encriptación y desencriptación
    const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};
    infoDescriptar = infoDescriptar.toLowerCase()

      for (let i = 0; i < reglas.length; i++) {
        if(infoDesencriptar.includes(reglas)){
            infoDescriptar = infoDescriptar.replaceAll(reglas)
      }
      return infoDescriptar;
  }

  //Función para copiar el texto
function copiarTexto(texto) {
    navigator.clipboard.writeText(texto)
    .then(() => {
        alert("Texto copiado");
    }).catch(err => {
        console.error("Error al copiar:", err);
      });
    }
      botonCopiar.addEventListener("click", () => {
        textoCopiar = mensaje.value;
        copiarTexto(textoCopiar);
      });