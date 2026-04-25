const paisDestino = "Brasil";
const paisesDisponibles = ["Bolivia", "Peru", "Argentina", "Brasil", "Nueva Guinea", "Mexico"];
let edadPasajero = 17;
let acompanado = true;
let pasaporte = true;
let casado = false;

console.log(`Verificamos si hay pasajes para ${paisDestino}`);


if (paisesDisponibles.indexOf(paisDestino) > -1) {

    
    if ((edadPasajero >= 18 || acompanado) && pasaporte) {
        console.log("Puede viajar");
    } else {
        console.log("No cumple los requisitos para viajar");
    }

} else {
    console.log("No hay pasajes disponibles para ese destino");
}