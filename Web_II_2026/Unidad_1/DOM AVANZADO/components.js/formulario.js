const Form =(()=>{
        const form = document.querySelector('[data-form]');//aqui estamos accediendo al formulario
        const inputTask = document.querySelector('[data-input-task]');//recupero input nombre de tareas
        const inputDescription = document.querySelector('[data-input-descripcion]');
        const inputFecha  = document.querySelector('[data-input-fecha]');//fecha
        const inputPrioridad = document.querySelector('[data-input-prioridad]');//prioridad

        const datosForm = () =>{
            return{
                task: inputTask.value.trim(),
                description: inputDescription.value.trim(),
                date: inputFecha.value.trim(),
                priority: inputPrioridad.value.trim()
            }
        };
        const reset = () =>{
            inputTask.value = "";
            inputDescription.value = "";
            inputFecha.value = "";
            inputPrioridad.value  = "";
        }
        const setDatos = (callback) =>{
            form.addEventListener('submit',(event)=>{
                event.preventDefault();
                callback(datosForm());
                reset();
            });

        };
return {setDatos,}
})();
export default Form;


