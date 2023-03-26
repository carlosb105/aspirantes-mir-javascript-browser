let crear = document.querySelector("#crear")
let input = document.querySelector("#newtarea")
const form = document.querySelector(".form")

function handlesubmit(event) {
    event.preventDefault()
    const element  = document.getElementById('lista');
    const fragment = document.createDocumentFragment();
    const li = document.createElement("li")

    const inputtarea = document.createElement("input")
    inputtarea.setAttribute ("type", "checkbox");
    inputtarea.setAttribute ("id", "tareacreada");

    //creando el objeto con las propidades de cada nueva tarea
    let contarchecbox = document.getElementById("lista").checkbox;
    for ( let i=1; i<contarchecbox.checkbox.length; i++){
        let numerodelchecbox = numerodelchecbox + i
    }
    let objnewtask = {}
    objnewtask.id = numerodelchecbox
    objnewtask.title = ""
    objnewtask.complete = false
    console.log(objnewtask)

    const label = document.createElement("label")
    label.setAttribute ("for", "tareacreada")
    label.textContent = input.value;

    li.appendChild(inputtarea)
    li.appendChild(label)
    fragment.appendChild(li)
    element.appendChild(fragment)
    form.reset()

    //falta que las tareas se creen con un id unico y un estado falso por defecto
    
    //cuando la tarea esta seleccionada esta funcion cambia el estado de comppletado a falso
    function handlechecktask(evento){
    evento.preventDefault()
    console.log("seleccionado")       
}  
inputtarea.addEventListener("focus", handlechecktask)

};
form.addEventListener("submit", handlesubmit);


