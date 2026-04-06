import tabla from "./tabla.js";

const cards = (() => {
    const taskCardsContainer = document.getElementById('taskCards');

    const update = () => {
        const tasks = tabla.getTask();
        taskCardsContainer.innerHTML = '';

        tasks.forEach(task => {
            const card = document.createElement('div');
            card.className = 'taskCard';
            
            if(task.completed) card.classList.add('card-completed');

            card.innerHTML = `
                <p><strong>Nombre:</strong> ${task.task}</p>
                <p><strong>Descripción:</strong> ${task.description}</p>
                <p><strong>Fecha:</strong> ${task.date}</p>
                <p><strong>Prioridad:</strong> ${task.priority}</p>
                <p><strong>Estado:</strong> ${task.completed ? ' Completada' : ' Pendiente'}</p>
            `;
            taskCardsContainer.appendChild(card);
        });
    };

    return { update };
})();

export default cards;