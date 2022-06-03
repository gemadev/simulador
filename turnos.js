document.getElementById('cargar').addEventListener('click', cargarJSON);
const listado = (JSON.parse(locaStorageExists()));
drawTurnosTable();

if (listado.length === 0){document.getElementById("Turnos").innerHTML = "NO HAY TURNOS CARGADOS"};

function cargarJSON() {
    fetch('especialistas.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(especialistas){
            let html = '';
            especialistas.forEach(function(especialista){
                html += `
                    <li>${especialista.nombre} ${especialista.cargo}</li>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
        });
}

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
