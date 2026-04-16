import { clientService } from "../service/client-service.js";

const formulario = document.querySelector('[data-form-producto]');


formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();
    
    
    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;

    try {
        
        await clientService.crearProducto(nombre, precio);
        
        
        window.location.href = "../screens/registro_concluido.html";
    } catch (error) {
        console.log("Error al registrar el producto:", error);
        window.location.href = "../screens/error.html";
    }
});