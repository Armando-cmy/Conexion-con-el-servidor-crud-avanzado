import { clientService } from "../service/client-service.js";
const crearNuevaLinea = (nombre, email, id) => {
  const linea = document.createElement("tr");
  const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a href="../screens/editar_cliente.html?id=${id}" class="simple-button simple-button--edit">Editar</a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button" id="${id}">
            Eliminar
          </button>
        </li>
      </ul>
    </td>`;
  linea.innerHTML = contenido;
  
    
  return linea;
};

const table = document.querySelector("[data-table]");


clientService.listarClientes()
  .then((data) => {
    
    data.forEach(({ nombre, email, id }) => {
      
      const nuevaLinea = crearNuevaLinea(nombre, email, id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => {
    alert("Ocurrió un error al cargar los datos");
    console.log(error);
  });