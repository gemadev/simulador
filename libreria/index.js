
function redirectToShiftList(){
    event.preventDefault();
    const DateTime = luxon.DateTime;
    const time = DateTime.now();
    
    const formulario = {
        nombre: document.getElementById("nombre").value,
        especialidad: document.getElementById("cargo").value,
        fecha: time.toLocaleString(DateTime.DATETIME_SHORT)
    }
    addToLocalStorage(formulario);
}


let borrar = document.getElementById("borrar");

const borrarLista = () => {localStorage.clear()};

/*borrar.addEventListener("click", () => {
    result = window.prompt("Ingrese la contraseña");
    result == "1234" ?( borrarLista(),  window.alert("CONTRASEÑA CORRETA, LISTA BORRADA")) 
    : window.alert("CONTRASEÑA INCORRECTA");
})*/

borrar.addEventListener("click", () => {
    Swal.fire({
        title: '¿esta seguro?',
        text: "No se va a poder revitir",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#28A745',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrarlo'
      }).then((result) => {
        if (result.isConfirmed) {
            borrarLista(),
          Swal.fire(
            'Borrado!',
            'La lista de turnos fue borrada',
            'finzalizado'
          )
        }
      })
})    