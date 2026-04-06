import API from "./get";
const deleteData = (id) =>{
    fetch(`${API}post/${id}`,{
        method : "DELETE"
    }).then(response =>{
        if(!response.ok){
            throw new Error(`http error estado: ${response.status   }`)
        }
        alert(`Post con el id ${id} eliminado`);
    })
    .catch(error => (error.message,true));
}

export default deleteData;
