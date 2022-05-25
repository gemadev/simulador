const storagePath = "sfhits"

function locaStorageExists(){
    if (localStorage.getItem(storagePath) === null){
        localStorage.setItem(storagePath, JSON.stringify([]));
    }
    return localStorage.getItem(storagePath);
    
}

function addToLocalStorage(turno){
    
    const stringStorage = locaStorageExists(); 
    const storage = JSON.parse(stringStorage);
    document.getElementById("nombre").value == "" ? (
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Agrege un nombre!'
    })
    ) : (
    storage.push(turno),
    console.log(storage),
    localStorage.setItem(storagePath, JSON.stringify(storage)),
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Turno agregado',
    showConfirmButton: false,
    timer: 1500
})
        );
  
}



