const API_URL = 'http://localhost:3001/posts';//en aqui se pone la api que genero 'warp'
const getData = () =>{
    fetch(API_URL)
    .then(response => {
        if (!response.ok){
            throw new Error(`HTTP error! estado: ${response.status}`);//si el servidor no responde se va mostrar este error
        }
        return response.json();
    }).then(data => showResult(data)).catch(error =>(error.message,true));
}