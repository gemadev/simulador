const num = parseInt(prompt("INGRESE UN NUMERO POSITIVO: "));
let esPrimo = true;

if (num === 1) {
    document.write("1 NO ES UN NUMERO PRIMO");
}else if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            esPrimo = false;
        break;
        }
    }if (esPrimo) {
        document.write(`${num} ES UN NUMERO PRIMO`);
    } else {
        document.write(`${num} NO ES UN NUMERO PRIMO`);
    }
}else {
    document.write("EL NUMERO INGRESADO PUEDE SER CALCULADO");
}