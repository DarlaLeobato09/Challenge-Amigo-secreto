// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function agregarAmigo() {
    let nombreAmigo =document.getElementById('amigo').value;
    console.log(nombreAmigo);
    if (nombreAmigo.trim() === ''){
        alert("Por favor, inserte un nombre.");
        return;
    } 
    if (amigos.includes(nombreAmigo)) {
        alert("Ese nombre ya fue agregado.");
        return;
    }
    amigos.push(nombreAmigo);
    
    limpiarCampo();
    
    console.log(amigos) ;
    //alert("click desde el botom");
}
function limpiarCampo(){
    let caja= document.querySelector('#amigo');
    caja.value='';
}

function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); 
        li.textContent = amigos[i];            
        lista.appendChild(li);                 
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}
