let turnoCli = 0
let turnoOdo = 0
let turnoCar = 0
let esperaCli = 0
let esperaOdo = 0
let esperaCar = 0
const specialist = parseInt(prompt("SELECIONE LA ESPECIALIDAD:\n1: CLINICO  \n2: ODONTOLOGO \n3: CARDIOLOGO \n4: SALIR "));


const OPTIONS = {
    1 : 'CLINICO',
    2 : 'ODONTOLOGO',
    3 : 'CARDIOLOGO',
    4 : 'SALIR'
}
const CHOICE = OPTIONS[specialist];


switch (CHOICE) {
    case 'CLINICO':
        clinico();
        break;
    case 'ODONTOLOGO':
        odontologo();
        break;
    case 'CARDIOLOGO':
         cardiologo();
        break;  
    default:
        alert('opcion invalida');          
}

function clinico () {
    turnoCli = ++turnoCli;
    esperaCli = esperaCli+20;
    return alert(`su turno es el N° ${turnoCli}, y el tiempo de espera estimado es de: ${esperaCli} minutos`);
}

function odontologo () {
    turnoOdo = ++turnoOdo;
    esperaOdo = esperaOdo+60;
    return alert(`su turno es el N° ${turnoOdo}, y el tiempo de espera estimado es de: ${esperaOdo} minutos`);
}

function cardiologo () {
    turnoCar = ++turnoCar;
    esperaCar = esperaCar+30;
    return alert(`su turno es el N° ${turnoCar}, y el tiempo de espera estimado es de: ${esperaCar} minutos`);
}