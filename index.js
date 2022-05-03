let turnoCli = 0
let turnoOdo = 0
let turnoCar = 0
let esperaCli = 0
let esperaOdo = 0
let esperaCar = 0

let specialist = parseInt(prompt("SELECIONE LA ESPECIALIDAD:\n1: CLINICO  \n2: ODONTOLOGO \n3: CARDIOLOGO \n4: SALIR "));


const OPTIONS = {
    1 : 'CLINICO',
    2 : 'ODONTOLOGO',
    3 : 'CARDIOLOGO',
    4 : 'SALIR'
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
    case 'SALIR':
        break;    
    default:
        alert('opcion invalida');          
}

function turno (turno,espera,tiempo) {
    turno = ++turno;
    espera = espera+tiempo;
    return alert(`su turno es el N° ${turno}, y el tiempo de espera estimado es de: ${espera} minutos`);
}