const paisesDisponible = ["Bolivia", "Ecuador", "Venezuela", "Brasil", "Italia", "Francia"];
const preciosPaises = [100, 200, 300, 400, 500, 600];
const presupuesto = 250;

let i = 0;


while (i < paisesDisponible.length && preciosPaises[i] > presupuesto) {
    i++;
}

if (i === paisesDisponible.length) {
    console.log("No existe pasaje dentro del presupuesto");
} else {
    console.log(`Puedes comprar el pasaje a ${paisesDisponible[i]}`);
}