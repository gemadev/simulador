let i = 0;
const listado = (JSON.parse(locaStorageExists()));
if (listado.length === 0){document.getElementById("Turnos").innerHTML = "NO HAY TURNOS CARGADOS"};
listado.forEach(element => addElement(element[i]));
function addElement (){
    let newP = document.createElement("p");
    let newContent = document.createTextNode(JSON.stringify(listado[i]));
    newP.appendChild(newContent);
    let currentDiv = document.getElementById("div1");
    document.body.insertBefore(newP, currentDiv);
};

