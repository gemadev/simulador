let turnoCli = []
let turnoOdo = []
let turnoCar = []
let esperaCli = 0
let esperaOdo = 0
let esperaCar = 0
let turnos = []
const listadoMedicos = ['Gimenez','Gomez','Juarez','Lopez','Campodonico'];

let Nombre = document.getElementById('Nombre');
let Clinico = document.getElementById('Clinico');
let Odontologo = document.getElementById('Odontologo');
let Cardiologo = document.getElementById('Cardiologo');
let Turnos = document.getElementById('Turnos');

let specialist = parseInt(prompt("SELECIONE LA ESPECIALIDAD:\n1: CLINICO  \n2: ODONTOLOGO \n3: CARDIOLOGO \n4:BUSCAR ESPECIALISTA \n5: SALIR "));

const OPTIONS = {
    1 : 'CLINICO',
    2 : 'ODONTOLOGO',
    3 : 'CARDIOLOGO',
    4 : 'BUSCAR MEDICOS',
    5 : 'SALIR'
}


const CHOICE = OPTIONS[specialist];


switch (CHOICE) {
    case 'CLINICO':
        turno(Nombre,turnoCli,esperaCli,20);
        break;
    case 'ODONTOLOGO':
        turno(Nombre,turnoOdo,esperaOdo,50);
        break;
    case 'CARDIOLOGO':
         turno(Nombre,turnoCar,esperaCar,40);
        break;  
    case 'BUSCAR MEDICOS':
        let medicos = (prompt("INGRESE EL APELLIDO DEL MEDICO SI BUSCA UN ESPECIALISTA EN PARTICULAR"));
        buscar(medicos,listadoMedicos);
        break;   
    case 'SALIR':
        break;    
    default:
        alert('opcion invalida');          
}

function turno (Nombre,turno,espera,tiempo) {
    turno += 1;
    espera = espera+tiempo;
    return Turnos.innerHTML = `${Nombre} su turno es el N° ${turno}, y el tiempo de espera estimado es de: ${espera} minutos`;
}
function buscar(medicos,listadoMedicos){
    console.log(medicos)
  if  (listadoMedicos.includes(medicos) == true){
      return alert(`el especialsita ${medicos} esta disponible`)
  } else {
      return alert(`el especialista ${medicos} no esta disponible`)
  }

}

document.getElementById("Enviar")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("Enviar").click();
    }
});

document.getElementById("Listado")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 76) {
        document.getElementById("Listado").click();
    }
});
 