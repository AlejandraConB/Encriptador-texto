// Configuración de eventos para los botones
document.querySelector('.boton-encriptar').addEventListener('click', encriptar);
document.querySelector('.boton-descriptar').addEventListener('click', descriptar);
document.querySelector('.bott-copiar').addEventListener('click', copiar);

    // Función para validar el texto ingresado
    function validarTexto(texto) {
        const caracteresInvalidos = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
        const mayusculas = /[A-Z]/g;  
        const vacio = "";

        if (texto.match(mayusculas) || texto.match(caracteresInvalidos)) {
          alert("No se permiten caracteres especiales ni mayúsculas");
          return false; 
        } else if (texto === vacio) {
          alert("Ingrese un mensaje para encriptar o desencriptar");
          return false;
        }
        return true;
      }

// Definimos las reglas de encriptación y desencriptación
const reglas = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };

  // Función para encriptar el texto
  function encriptar() {
    const textoIngresado = document.querySelector('.area-texto').value;
    
    if (validarTexto(textoIngresado)) {
      const textoEncriptado = textoIngresado.split('').map(char => reglas[char] || char).join('');
      document.querySelector('.mensaje').value = textoEncriptado;
    }
  }
  
  // Función para desencriptar el texto
  function descriptar() {
    const textoIngresado = document.querySelector('.area-texto').value;
    
    if (validarTexto(textoIngresado)) {
      let textoDesencriptado = textoIngresado;
      for (const [clave, valor] of Object.entries(reglas)) {
        textoDesencriptado = textoDesencriptado.split(valor).join(clave);
      }
      document.querySelector('.mensaje').value = textoDesencriptado;
    }
  }
   
  // Función para copiar el texto al portapapeles
  function copiar() {
    const mensaje = document.querySelector('.mensaje').value;
    if (mensaje) {
      navigator.clipboard.writeText(mensaje).then(() => {
        alert('Texto copiado al portapapeles!');
      }).catch(err => {
        console.error('Error al copiar al portapapeles:', err);
      });
    } else {
      alert('No hay texto para copiar');
    }
  }

  //Código de práctica
/*function encriptar(){

    let mensaje = document.querySelector(".mensaje").value;
    let texto = document.querySelector(".area-texto");
    let letraParaEncriptar = ["e","i","a","u"];
    let letrasIngresadasMayusculas = /[A-Z]/;
    let caracteresIngresados = /["~!Q#$%&^*()_+|}{][/¿¡?<>;,.:-`'¨°¬]/;
    texto = texto.tolowerCase(); 

    if (letrasIngresadasMayusculas || caracteresIngresados){
        alert = ("Texto inválido, ingrese solo letras minúsculas");
        } 
        else{
            if (letraParaEncriptar == "e"){
                mensaje = "enter";

            } if (texto == "i"){
                mensaje = "imes";
            } else if(texto ==="a"){
                mensaje = "ai";
            } else if(texto =="o"){
                mensaje = "ober";
            } else if(texto =="u"){
                mensaje = "ufat";
            }  
         else(texto == mensaje){

            }
        }

 } */
