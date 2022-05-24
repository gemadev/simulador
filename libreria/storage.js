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
    storage.push(turno);
    console.log(storage);
    localStorage.setItem(storagePath, JSON.stringify(storage));
}



