const listado = (JSON.parse(locaStorageExists()));
drawTurnosTable();

if (listado.length === 0){document.getElementById("Turnos").innerHTML = "NO HAY TURNOS CARGADOS"};

function drawTurnosTable(){
    let tbody = document.querySelector('#turnosTable tbody');

    tbody.innerHTML = '';

    for (let i = 0; i < listado.length; i++){
    let row = tbody.insertRow(i);
    let nameCell = row.insertCell(0),
        specialistCell = row.insertCell(1),
        timeCell = row.insertCell(2);
    
    nameCell.innerHTML = listado[i].nombre;
    specialistCell.innerHTML = listado[i].especialidad;
    timeCell.innerHTML = listado[i].fecha;

    tbody.appendChild(row);
    }
}
