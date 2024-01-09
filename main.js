let nombre = prompt("Ingrese un nombre");

switch (nombre){
    case Moises:
        alert("Nombre correcto");

    case moises:
        alert("Nombre correcto");
    
    default:
        alert("Nombre incorrecto");
}



const cuentaAtras = (numero) => {
    for(let i = numero; i <= 10; i++){
        return `Cuenta atras en ${i}`;
    }
}

