const tabla = (() => {
    
    const tables = {
        urgente: document.querySelector('#urgentTasksTable tbody'),
        normal: document.querySelector('#normalTasksTable tbody'),
        completada: document.querySelector('#completedTasksTable tbody')
    };

    const addTask = (task) => {
        
        let targetTable;
        const priority = task.priority.toLowerCase();

        if (priority === 'urgente') {
            targetTable = tables.urgente;
        } else {
            targetTable = tables.normal;
        }

        const nuevaFila = targetTable.insertRow();
        nuevaFila.insertCell(0).textContent = task.task;
        nuevaFila.insertCell(1).textContent = task.description;
        nuevaFila.insertCell(2).textContent = task.date;
        nuevaFila.insertCell(3).textContent = task.priority;

        const acctionCel = nuevaFila.insertCell(4);
        const acciones = document.createElement('div');
        acciones.className = 'actions';

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.className = 'btn-edit';
        editButton.onclick = () => {
            document.querySelector('[data-input-task]').value = task.task;
            document.querySelector('[data-input-descripcion]').value = task.description;
            document.querySelector('[data-input-fecha]').value = task.date;
            document.querySelector('[data-input-prioridad]').value = task.priority;

            nuevaFila.remove();
            document.dispatchEvent(new CustomEvent('taskUpdated'));
        };

        acciones.appendChild(editButton);
        
        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Hecho';
        completeButton.className = 'btn-complete';
        completeButton.onclick = () => {
            nuevaFila.classList.toggle('completed');
            
            if (nuevaFila.classList.contains('completed')) {
                tables.completada.appendChild(nuevaFila);
            } else {
                
                tables.normal.appendChild(nuevaFila);
            }
            
            document.dispatchEvent(new CustomEvent('taskUpdated'));
        };

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'btn-delete';
        deleteButton.onclick = () => {
            nuevaFila.remove();
            document.dispatchEvent(new CustomEvent('taskUpdated'));
        };

        acciones.appendChild(completeButton);
        acciones.appendChild(deleteButton);
        acctionCel.appendChild(acciones);
    };

    const getTask = () => {
        
        const allRows = [
            ...Array.from(tables.urgente.rows),
            ...Array.from(tables.normal.rows),
            ...Array.from(tables.completada.rows)
        ];

        return allRows.map(row => ({
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