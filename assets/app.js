// Configuración de eventos para los botones
const areaTexto = document.querySelector(".area-texto"); //textArea
const mensaje = document.querySelector(".mensaje");
const botonCopiar = document.getElementsById("bott-copiar");

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
    areaTexto.value = "";
    mensaje.style.backgroundImage = "none"; //Imagen de fondo desaparezca
}

// Función para encriptar el texto
  function encriptar (stringEncriptar) {
    // Definimos las reglas de encriptación
    let reglas = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; //matriz
    stringEncriptar = stringEncriptar.toLowerCase();

      for (let i = 0; i < reglas.length; i++) {
        if(stringEncriptada.includes(reglas[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(reglas[i][0], reglas[i][1]);
      }
      return stringEncriptar;
  }

    //Botón desncriptar
  function botonDescriptar(){
    const = textoEncriptado = desencriptar(areaTexto.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    botonCopiar.style.display = "block";
  }

  // Función para desencriptar el texto
  function desencriptar(stringDesencriptada) {
    // Definimos las reglas de desencriptación
    const reglas = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

      for (let i = 0; i < reglas.length; i++) {
        if(stringDesencriptada.includes(reglas[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(reglas[i][1], reglas[i][0]);
      }
      return stringDesencriptada;
  }

  //Función para copiar el texto
function copiarTexto(texto) {
    navigator.clipboard.writeText(texto);
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