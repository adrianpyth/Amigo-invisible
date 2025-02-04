// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = []; // Lista de amigos

function agregarAmigo() {
    // Obtener el nombre del input
    let nombre = document.getElementById('amigo').value;
    
    // Validar que el nombre no esté vacío
    if(nombre == '') {
        alert('Por favor, inserte un nombre..');
        return;
    }
    
    // Agregar el nombre a la lista
    listaAmigos.push(nombre);
    
    // Mostrar la lista de amigos
    let listaElemento = document.getElementById('listaAmigos');
    listaElemento.innerHTML += `<li>${nombre}</li>`;
    
    // Limpiar el input
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    alert('El amigo sorteado es: ' + amigoSorteado);
    return amigoSorteado;
}