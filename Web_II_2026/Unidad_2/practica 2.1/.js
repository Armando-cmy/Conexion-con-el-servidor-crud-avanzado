const btn = document.getElementById("btnAction");
const lista = document.getElementById("listaAlumnos");

const nombre = document.getElementById("nombre");
const curso = document.getElementById("curso");
const edad = document.getElementById("edad");
const hermanos = document.getElementById("hermanos");
const ciudad = document.getElementById("ciudad");


btn.addEventListener("click", () => {
    
    
    if (
        nombre.value === "" ||
        curso.value === "" ||
        edad.value === "" ||
        hermanos.value === "" ||
        ciudad.value === ""
    ) {
        alert("Completa todos los campos");
        return;
    }

    
    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombre.value}</td>
        <td>${curso.value}</td>
        <td>${edad.value}</td>
        <td>${hermanos.value}</td>
        <td>${ciudad.value}</td>
        <td>
            <button class="btn-delete">Eliminar</button>
        </td>
    `;

    lista.appendChild(fila);

    
    nombre.value = "";
    curso.value = "";
    edad.value = "";
    hermanos.value = "";
    ciudad.value = "";
});


lista.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-delete")) {
        e.target.parentElement.parentElement.remove();
    }
});