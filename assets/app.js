function encriptar (){

let mensaje = document.querySelector(".mensaje");
let texto = document.querySelector(".area-texto");
let letraParaEncriptar = ["e","i","a","u"];
let letrasIngresadasMayusculas = /[A-Z]/;
let caracteresIngresados = /["~!Q#$%&^*()_+|}{][/\?¿¡<>;,.:-`'¨°¬]/;

texto = texto.tolowerCase();

if (letrasIngresadasMayusculas || caracteresIngresados || ""){
    alert = "Texto inválido, ingrese solo letras minúsculas";
} 
    else{
        if (letraParaEncriptar === "e"){
            mensaje = "enter";

        } if (texto ==="i"){
            mensaje = "imes";
        } else if(texto ==="a"){
            mensaje = "ai";
        } else if(texto ==="o"){
            mensaje = "ober";
        } else if(texto ==="u"){
            mensaje = "ufat";
        }  
         else(texto == mensaje){

         }
    }
}