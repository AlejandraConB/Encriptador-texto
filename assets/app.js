const areaTexto = document.querySelector(".area-texto");
const mensaje = document.querySelector(".mensaje");

let letraParaEncriptar = ["e","i","a","u"];
let letrasIngresadasMayusculas = /[A-Z]/;
let caracteresIngresados = /["~!Q#$%&^*()_+|}{][/\?¿¡<>;,.:-`'¨°¬]/

function encriptar (textoEncriptar){
    textoEncriptar = textoEncriptar.tolowerCase()

if (letrasIngresadasMayusculas || caracteresIngresados){
    alert("Texto inválido, ingrese solo letras minúsculas");
} 
    else{
        if (letraParaEncriptar === "e"){
            console.log("enter");

        } if (letra ==="i"){
            console.log("imes");
        } else if(letra ==="a"){
            console.log("ai");
        } else if(letra ==="o"){
            console.log("ober");
        } else if(letra ==="u"){
            console.log("ufat");
        }  
         else{
            
         }
    }
}