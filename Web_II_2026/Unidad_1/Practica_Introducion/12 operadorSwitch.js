const paisDestino = "Brasil";
const paisesDisponibles = ["Bolivia", "Peru", "Argentina", "Brasil", "Nueva Guinea", "Mexico"];
let valorPasaje = 0;

switch (paisDestino) {
    case "Bolivia":
        valorPasaje = 200;
        break;
    case "Peru":
        valorPasaje = 300;
        break;
    case "Argentina":
        valorPasaje = 400;
        break;
    case "Brasil":
        valorPasaje = 500;
        break;
    case "Nueva Guinea":
        valorPasaje = 600;
        break;
    case "Mexico":
        valorPasaje = 700;
        break;
    default:
        console.log("No existen países para el destino ingresado");
        break;
}

if (valorPasaje > 0) {
    console.log(`El valor del pasaje es ${valorPasaje}`);
}