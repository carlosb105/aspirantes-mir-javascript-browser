// Obtener elementos del DOM
const form = document.querySelector('form');
const input = document.querySelector('input');
const section = document.querySelector('section')

 // Manejar el evento de enviar el formulario
form.addEventListener('submit', (evento)=> {
    evento.preventDefault();
    const nombre = input.value
    localStorage.setItem("name", nombre);
    form.reset()
})

let mensajeinicial = document.getElementById("msjinicial");

let mostraenombre = document.createElement("h1")

// Función para mostrar el nombre guardado en localStorage
function showName() {

    let nomlocalstor = localStorage.getItem('name')
    if (nomlocalstor == null){
        mensajeinicial.innerHTML = "NO hay datos"
    }
    else{
    mensajeinicial.innerHTML = "";
    mostraenombre.setAttribute('id', 'title');
    document.body.appendChild(mostraenombre);

    let valornombre = document.querySelector('#title');
    valornombre.innerHTML = "El nombre guardado es: " + nomlocalstor;
    }
}
form.addEventListener("submit", showName)

// Función para borrar el nombre guardado en localStorage
let elimina = document.getElementById("eliminar")
function deleteName() {
    localStorage.clear();
    let valornombre = document.querySelector('#title');
    valornombre.innerHTML = ""
    let mensajeinicial = document.getElementById("msjinicial");
    mensajeinicial.innerHTML = "NO hay datos"
}
elimina.addEventListener("click", deleteName)
showName()
// Mostrar el nombre guardado al cargar la página
//showName()
