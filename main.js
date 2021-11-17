let nivel = 1, oportinidades = 3, numeroMaximo = 0, numeroUsuario, numeroCorrecto;
const numeroMinimo = 1;

while (nivel <= 3 && oportinidades !== 0) {

    numeroUsuario = prompt("COLOCA UN NUMERO PARA ADIVINAR EL NUMERO MAGICO", 0);
    numeroUsuario = parseInt(numeroUsuario);

    if (nivel === 1) {
        numeroMaximo = 10;
        numeroCorrecto = Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo;
        numeroCorrecto = parseInt(numeroCorrecto);
    } else if (nivel === 2) {
        numeroMaximo = 50;
        numeroCorrecto = Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo;
        numeroCorrecto = parseInt(numeroCorrecto);
    } else if (nivel === 3) {
        numeroMaximo = 100;
        numeroCorrecto = Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo;
        numeroCorrecto = parseInt(numeroCorrecto);
    }

    if (numeroUsuario === 0) {
        alert(`GRACIAS POR JUGAR`);
        break;
    }

    if (numeroCorrecto === numeroUsuario) {
        alert(`GANASTE EL NIVEL ${nivel} PASAS AL NIVEL ${nivel += 1}!!!`);
        continue;
    } else if (numeroCorrecto != numeroUsuario) {
        oportinidades--;
        alert(`PERDISTE TE QUEDAN ${oportinidades}`);
    }

    if (oportinidades === 0) {
        alert(`JUEGO TERMINADO :C .`);
    }

}


