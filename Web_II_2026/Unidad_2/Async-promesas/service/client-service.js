import { clientService } from "../service/client-service.js";
const listarClientes = () => fetch("http://localhost:3001/perfil").then(r => r.json());

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3001/perfil", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, email, id: uuid.v4() })
  });
};


const crearProducto = (nombre, precio) => {
  return fetch("http://localhost:3001/producto", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, precio, id: uuid.v4() })
  });
};


const crearPet = (nombre, edad, raza, peso, id_dueno) => {
  return fetch("http://localhost:3001/pets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, edad, raza, peso, id_dueno, id: uuid.v4() })
  });
};

export const clientService = {
  listarClientes,
  crearCliente,
  crearProducto,
  crearPet
};