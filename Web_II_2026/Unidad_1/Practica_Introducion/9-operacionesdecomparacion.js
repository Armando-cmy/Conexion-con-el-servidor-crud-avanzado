
const valorPasaje=1000;
if(valorPasaje==1000){
    console.log(`el pasaje es correcto`)
}
const paisDestino="ecuador";
const paisesDisponible=["bolivia","ecuador","brasil","Venezuela","Italia", "Francia",];
let edadPasajero=17;
let acompañado=true;

console.log(`pasaje para ${paisDestino}`);
if((paisesDisponible.indexOf(paisDestino)> -1 &&(edadPasajero>=18)||( acompañado))){
    console.log("pasaje disponible para venta")
}
else{
    console.log("no se puede vender el pasaje")
}
if (
    paisesDisponible.indexOf(paisDestino) === -1 ||
    (edadPasajero < 18 && !acompañado)
) {
    console.log("no se puede vender el pasaje");
} else {
    console.log("pasaje disponible para venta");
}