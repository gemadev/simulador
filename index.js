let turnoCli = []
let turnoOdo = []
let turnoCar = []
let esperaCli = 0
let esperaOdo = 0
let esperaCar = 0
let turnos = []
const listadoMedicos = ['Gimenez','Gomez','Juarez','Lopez','Campodonico'];

function redirectToShiftList(){
    event.preventDefault();
    
    const formulario = {
        nombre: document.getElementById("nombre").value,
        especialidad: document.getElementById("cargo").value
    }
    addToLocalStorage(formulario);
}


let borrar = document.getElementById("borrar");

const borrarLista = () => {localStorage.clear()};

borrar.addEventListener("click", () => {
    result = window.prompt("Ingrese la contraseña");
    result == "1234" ?( borrarLista(),  window.alert("CONTRASEÑA CORRETA, LISTA BORRADA")) 
    : window.alert("CONTRASEÑA INCORRECTA");
})