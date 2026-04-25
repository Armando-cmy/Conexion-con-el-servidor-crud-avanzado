const datos = [
    { pais: "Bolivia", precio: 200 },
    { pais: "Ecuador", precio: 500 },
    { pais: "Brasil", precio: 900 },
    { pais: "Venezuela", precio: 100 },
    { pais: "Paraguay", precio: 200 }
];

const presupuesto = 300;

const buscarPasaje = () => {
    let i = 0;
    let paisSeleccionado = "";

    do {
        if (datos[i].precio <= presupuesto) {
            paisSeleccionado = datos[i].pais;
        }
        i++;
    } while (i < datos.length && paisSeleccionado === "");

    return paisSeleccionado === ""
        ? "No existe pasajes disponibles"
        : `Puedes comprar pasaje a ${paisSeleccionado}`;
};

console.log(buscarPasaje());