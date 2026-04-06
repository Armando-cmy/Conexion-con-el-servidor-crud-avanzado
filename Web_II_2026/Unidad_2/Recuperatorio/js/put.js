import API from "./get";
const updateData = (id, updatedData) =>{
    fetch(`${API}post/${id}`,{
        method : "PUT",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(updatedData)
    }).then(response =>{
        if(!response.ok){
            throw new Error(`http error estado: ${response.status   }`)
        }
        alert(`Post con el id ${id} actualizado`);
    })
    .catch(error => (error.message,true));
}

export default updateData;