import { clientService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form-pets]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const edad = document.querySelector("[data-edad]").value;
    const raza = document.querySelector("[data-raza]").value;
    const peso = document.querySelector("[data-peso]").value;
    const id_dueno = document.querySelector("[data-dueno]").value;

    
    clientService
        .crearPet(nombre, edad, raza, peso, id_dueno)
        .then(() => {
            alert(" ¡Mascota registrada con éxito en el db.json!");
            formulario.reset();
        })
        .catch((err) => {
            console.error("Error al registrar:", err);
            alert(" Hubo un fallo al registrar. Revisa Warp.");
        });
});