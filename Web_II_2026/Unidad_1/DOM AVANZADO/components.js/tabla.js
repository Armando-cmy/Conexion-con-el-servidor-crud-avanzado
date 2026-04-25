import cards from "./cards.js";
const tabla = (() => {
    const cuerpoTabla = document.getElementById('taskTable');
    const addTask = (task) => {
        const nuevaFila = cuerpoTabla.insertRow();
        nuevaFila.insertCell(0).textContent = task.task;
        nuevaFila.insertCell(1).textContent = task.description;
        nuevaFila.insertCell(2).textContent = task.date;
        nuevaFila.insertCell(3).textContent = task.priority;
        //agregar acciones
        const acctionCel = nuevaFila.insertCell(4);
        const acciones = document.createElement('div');
        acciones.className = 'actions';

        // Botón Hecho
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Hecho';
        completeButton.className = 'btn-complete'; 
        completeButton.addEventListener('click', () => {
            nuevaFila.classList.toggle('completed');
            cards.update(); 
        });

        // Botón Eliminar
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar'; 
        deleteButton.className = 'btn-delete';
        deleteButton.addEventListener('click', () => {
            nuevaFila.classList.toggle('completed');
            cuerpoTabla.deleteRow(nuevaFila.rowIndex-1);
            cards.update(); 
        });

        acciones.appendChild(completeButton);
        acciones.appendChild(deleteButton);
        acctionCel.appendChild(acciones);
    };

    const getTask = () => {
        return Array.from(cuerpoTabla.rows).map(row => ({
            task: row.cells[0].textContent,
            description: row.cells[1].textContent,
            date: row.cells[2].textContent,
            priority: row.cells[3].textContent,
            completed: row.classList.contains('completed')
        }));
    };

    return { addTask, getTask };
})();

export default tabla;