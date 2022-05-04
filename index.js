let turnoCli = []
let turnoOdo = []
let turnoCar = []
let esperaCli = 0
let esperaOdo = 0
let esperaCar = 0
let turnos = []
const listadoMedicos = ['Gimenez','Gomez','Juarez','Lopez','Campodonico'];


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
        turno(turnoCli,esperaCli,20);
        break;
    case 'ODONTOLOGO':
        turno(turnoOdo,esperaOdo,50);
        break;
    case 'CARDIOLOGO':
         turno(turnoCar,esperaCar,40);
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

function turno (turno,espera,tiempo) {
    turno += 1;
    espera = espera+tiempo;
    return alert(`su turno es el N° ${turno}, y el tiempo de espera estimado es de: ${espera} minutos`);
}
function buscar(medicos,listadoMedicos){
    console.log(medicos)
  if  (listadoMedicos.includes(medicos) == true){
      return alert(`el especialsita ${medicos} esta disponible`)
  } else {
      return alert(`el especialista ${medicos} no esta disponible`)
  }

}