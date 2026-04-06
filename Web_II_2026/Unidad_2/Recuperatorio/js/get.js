const API="http://localhost:3001/";
const getData = () =>{
    return fetch(`${API}post`)
    .then(response =>{
        if(!response.ok){
            throw new Error(`http error estado: ${response.status   }`)
        }
        return response.json();
    })
    .catch(error => (error.message,true));
}


export default API;